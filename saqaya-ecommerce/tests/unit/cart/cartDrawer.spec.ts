import { shallowMount, VueWrapper } from "@vue/test-utils";
import cartDrawer from "../../../src/components/cart/cartDrawer.vue";
import { Product } from "../../../public/interfaces/Product";
import {createStore} from 'vuex'

describe("cart drawer component", () => {
  let wrapper: VueWrapper<any>;
  let mockStore: any;
  let product: Product;

  beforeAll(() => {
    product = {
      id: 1,
      title: "Dress",
      price: 100,
      description: "Nice dress",
      category: "Clothes",
      rating: { rate: 4, count: 10 },
      image: "image.jpg",
    };

    mockStore = createStore({
      state:{
        cart:[]
      }
    })
  });

  function mountDrawer(visible = true, cart: Product[] = []) {
    mockStore.state.cart = cart;

    return shallowMount(cartDrawer, {
      props: {
        visible,
      },
     global: {
                plugins: [mockStore],
            
      },
    });
  }

  it("shows overlay and drawer when visible is true", () => {
    wrapper = mountDrawer(true);
    expect(wrapper.find(".overlay").exists()).toBe(true);
    expect(wrapper.find(".drawer").classes()).toContain("open");
  });

  it("doesn't show overlay or open drawer when visible is false", () => {
    wrapper = mountDrawer(false);
    expect(wrapper.find(".overlay").exists()).toBe(false);
    expect(wrapper.find(".drawer").classes()).not.toContain("open");
  });

  it("emits close event when overlay is clicked", async () => {
    wrapper = mountDrawer(true);
    const overlay = wrapper.find(".overlay");
    await overlay.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("close");
  });

  it("displays empty message if cart is empty", () => {
    wrapper = mountDrawer(true, []);
    expect(wrapper.text()).toContain("Your cart is empty");
  });

  it("renders cartItem component when cart is not empty", () => {
    wrapper = mountDrawer(true, [product]);
    expect(wrapper.findComponent({ name: "cartItem" }).exists()).toBe(true);
  });

  it("has correct drawer class structure", () => {
    wrapper = mountDrawer(true);
    const drawer = wrapper.find(".drawer");
    expect(drawer.exists()).toBe(true);
    expect(drawer.classes()).toContain("drawer");
    expect(drawer.classes()).toContain("open");
  });
});
