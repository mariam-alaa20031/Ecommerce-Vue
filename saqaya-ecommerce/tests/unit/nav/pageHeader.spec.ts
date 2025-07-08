import { shallowMount, VueWrapper } from "@vue/test-utils";
import pageHeader from "../../../src/components/nav/pageHeader.vue";
import '../../../src/assets/logo.png';
import '../../../src/assets/shopping-cart.png'
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '../../../src/stores/cartStore'
import { Product } from "public/interfaces/Product";
import { Rating } from "public/interfaces/Rating";

describe("Page header component", () => {
  let wrapper: VueWrapper<any>;
  let store;
  let rate: Rating;
  let product: Product;
  rate = { rate: 4, count: 10 };
    
    product = {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: rate,
      category: "Female Dresses",
      image: "dummy value",
    };

  beforeAll(() => {
     wrapper = shallowMount(pageHeader, {
          global: {
             plugins: [createTestingPinia()],
       },
        });
         store = useCartStore() 
         store.cart=[product]

  });

  it("renders root header with class 'header'", () => {
    const header = wrapper.find(".header");
    expect(header.exists()).toBe(true);
  });



  it("renders left section and logo when cart is not selected", async () => {
    wrapper.vm.cartSelected = false;
    await wrapper.vm.$nextTick();
    const left = wrapper.find(".header__left");
    const logo = wrapper.find(".header__logo");
    expect(left.exists()).toBe(true);
    expect(logo.exists()).toBe(true);
  });

  it("renders right section and cart icon", () => {
    const right = wrapper.find(".header__right");
    const cartIcon = wrapper.find(".header__cart");
    expect(right.exists()).toBe(true);
    expect(cartIcon.exists()).toBe(true);
  });



  it("displays cartDrawer when cartSelected is true", async () => {
    wrapper.vm.cartSelected= true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: "cartDrawer" }).exists()).toBe(true);
  });



  it("closes cartDrawer when 'close' is emitted", async () => {
    wrapper.vm.cartSelected= true;
    await wrapper.vm.$nextTick();
    const drawer = wrapper.findComponent({ name: "cartDrawer" });
    expect(drawer.exists()).toBe(true);
    await drawer.vm.$emit("close");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.cartSelected).toBe(false);
  });
});
