import { shallowMount, VueWrapper } from "@vue/test-utils";
import buttonChangeQuantity from "../../../src/components/product/buttonChangeQuantity.vue";
import { Product } from "../../../public/interfaces/Product";
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '../../../src/stores/cartStore'

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

    wrapper = shallowMount(buttonChangeQuantity, {
      props: {
        product,
        add: addMock,
      },
       global: {
         plugins: [createTestingPinia()],
   },
    });
      store= useCartStore()
      store.cart=[product]
  });

  it("renders the quantity from store getter", () => {
    const quantityDiv = wrapper.find(".quantity__value");
    expect(quantityDiv.exists()).toBe(true);
    expect(quantityDiv.text()).toBe("1");
  });

  it("calls store dispatch on decrement button click", async () => {
    const spyDispatch = jest.spyOn(store, "removeFromCart");
    const minus = wrapper.find(".quantity__decrement");
    await minus.trigger("click");
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(spyDispatch).toHaveBeenCalledWith(product);
  });

  it("calls add when increment button is clicked", async () => {
    const plus = wrapper.find(".quantity__increment");
    await plus.trigger("click");
    expect(addMock).toHaveBeenCalledWith(product);
    expect(store.cart.length).toBe(1);
  });

 
});
