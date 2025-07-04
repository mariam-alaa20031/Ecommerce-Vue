import { shallowMount, VueWrapper } from "@vue/test-utils";
import pageHeader from "../../../src/components/nav/pageHeader.vue";
import '../../../src/assets/logo.png';
import '../../../src/assets/shopping-cart.png'

describe("Page header component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(pageHeader);

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
