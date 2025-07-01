import { shallowMount, VueWrapper } from "@vue/test-utils";
import buttonChangeQuantity from "../../../src/components/product/buttonChangeQuantity.vue";
import { Product } from "../../../public/interfaces/Product";
import { createStore } from "vuex";


describe("button changing quantity of product in cart component", () => {
  let wrapper: VueWrapper<any>;
  let product: Product;
  let store: any;
  const addMock = jest.fn();

  beforeEach(() => {
    product = {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: { rate: 4, count: 10 },
      category: "Female Dresses",
      image: "dummy value",
    };

    store = createStore({
      state: {
        cart: [product],
      },
      getters: {
        cartProductCounts: () => ({ 21: 1 }),
      },
      actions: {
        removeFromCart: jest.fn(),
      },
    });

    wrapper = shallowMount(buttonChangeQuantity, {
      props: {
        product,
        add: addMock,
      },
      global: {
        plugins: [store],
      },
    });
  });

  it("renders the quantity from store getter", () => {
    const quantityDiv = wrapper.find(".quantity__value");
    expect(quantityDiv.exists()).toBe(true);
    expect(quantityDiv.text()).toBe("1");
  });

  it("calls store dispatch on decrement button click", async () => {
    const spyDispatch = jest.spyOn(store, "dispatch");
    const minus = wrapper.find(".quantity__decrement");
    await minus.trigger("click");
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith("removeFromCart", product);
  });

  it("calls add when increment button is clicked", async () => {
    const plus = wrapper.find(".quantity__increment");
    await plus.trigger("click");
    expect(addMock).toHaveBeenCalledWith(product);
    expect(store.state.cart.length).toBe(1);
  });

 
});
