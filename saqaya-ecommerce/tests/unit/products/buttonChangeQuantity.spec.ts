import { shallowMount, VueWrapper } from "@vue/test-utils";
import buttonChangeQuantity from "../../../src/components/product/buttonChangeQuantity.vue";
import { Product } from "../../../public/interfaces/Product";

describe("button changing quantity of product in cart component", () => {
  let wrapper: VueWrapper<any>;
  let product: Product;
  const addMock = jest.fn();
  const dispatchMock = jest.fn();

  const mockStore = {
    dispatch: dispatchMock,
    getters: {
      cartProductCounts: {
        21: 3
      }
    }
  };

  beforeEach(() => {
    product = {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: { rate: 4, count: 10 },
      category: "Female Dresses",
      image: "dummy value"
    };

    wrapper = shallowMount(buttonChangeQuantity, {
      props: {
        product,
        add: addMock
      },
      global: {
        mocks: {
          $store: mockStore
        }
      }
    });
  });

  it("renders the container with class 'quantity'", () => {
    const container = wrapper.find("div.quantity");
    expect(container.exists()).toBe(true);
  });

  it("renders decrement and increment buttons with correct classes", () => {
    const decrementButton = wrapper.find("button.quantity__decrement");
    const incrementButton = wrapper.find("button.quantity__increment");

    expect(decrementButton.exists()).toBe(true);
    expect(decrementButton.text()).toBe("-");

    expect(incrementButton.exists()).toBe(true);
    expect(incrementButton.text()).toBe("+");
  });

  it("renders the quantity display with class 'quantity__value'", () => {
    const valueDiv = wrapper.find("div.quantity__value");
    expect(valueDiv.exists()).toBe(true);
    expect(valueDiv.text()).toBe("3");
  });

  it("calls removeFromCart on decrement click", async () => {
    const decrementButton = wrapper.find(".quantity__decrement");
    await decrementButton.trigger("click");
    expect(dispatchMock).toHaveBeenCalledWith("removeFromCart", product);
  });

  it("calls the add function on increment click", async () => {
    const incrementButton = wrapper.find(".quantity__increment");
    await incrementButton.trigger("click");
    expect(addMock).toHaveBeenCalledWith(product);
  });
});
