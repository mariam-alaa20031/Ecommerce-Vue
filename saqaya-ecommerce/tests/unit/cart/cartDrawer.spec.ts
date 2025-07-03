import { shallowMount, VueWrapper } from "@vue/test-utils";
import cartDrawer from "../../../src/components/cart/cartDrawer.vue";
import { Product } from "../../../public/interfaces/Product";
import { createTestingPinia } from "@pinia/testing";
import { useCartStore } from "../../../src/stores/cartStore";

describe("cart drawer component", () => {
  let wrapper: VueWrapper<any>;
  let mockStore: any;
  let product: Product;

  beforeAll(async() =>  {
    product = {
      id: 1,
      title: "Dress",
      price: 100,
      description: "Nice dress",
      category: "Clothes",
      rating: { rate: 4, count: 10 },
      image: "image.jpg",
    };

    wrapper=shallowMount(cartDrawer, {
      props: {
        visible:true,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });

    mockStore = useCartStore();
    mockStore.cart=[product]
    await wrapper.vm.$nextTick();
  });


  it("shows overlay and drawer when visible is true", () => {
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".drawer").classes()).toContain("open");
  });

  it("doesn't show overlay or open drawer when visible is false", async() => {
    await wrapper.setProps({visible:false});
    expect(wrapper.find(".overlay").exists()).toBe(false);
    expect(wrapper.find(".drawer").classes()).not.toContain("open");
  });

  it("emits close event when overlay is clicked", async () => {
    await wrapper.setProps({visible:true});
    const overlay = wrapper.find(".overlay");
    await overlay.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("close");
  });

  it("displays empty message if cart is empty", async() => {
    mockStore.cart=[]
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Your cart is empty");
  });

  it("renders cartItem component when cart is not empty", async () => {
    mockStore.cart=[product]
    await wrapper.vm.$nextTick();
    await wrapper.setProps({visible:true});
    expect(wrapper.findComponent({ name: "cartItem" }).exists()).toBe(true);
  });

  it("has correct drawer class structure", () => {
    const drawer = wrapper.find(".drawer");
    expect(drawer.exists()).toBe(true);
    expect(drawer.classes()).toContain("drawer");
    expect(drawer.classes()).toContain("open");
  });
});
