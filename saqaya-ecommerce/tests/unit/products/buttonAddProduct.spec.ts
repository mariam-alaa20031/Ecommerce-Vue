import { DOMWrapper, shallowMount, VueWrapper } from "@vue/test-utils";
import buttonAddProduct from "../../../src/components/product/buttonAddProduct.vue";
import { Product } from "../../../public/interfaces/Product";

describe("buttonAddProduct.vue", () => {
  let wrapper: VueWrapper<any>;
  let product: Product;
  let button:DOMWrapper<HTMLButtonElement>;
  const addMock = jest.fn();

  beforeAll(() => {
    product = {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: { rate: 4, count: 10 },
      category: "Female Dresses",
      image: "dummy value"
    };
    wrapper = shallowMount(buttonAddProduct, {
      props: {
        product,
        add: addMock
      }
    });
  });

  it("renders the button with correct text", () => {
    button= wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Add to cart");
  });

  it("calls the add function when clicked", async () => {
    await button.trigger("click");
    expect(addMock).toHaveBeenCalledWith(product);
  });

  it("displays correct class on button",()=>{
    expect(button.classes()[0]).toBe("add")
  })
});
