import { shallowMount, VueWrapper } from "@vue/test-utils";
import cartItemDescription from "../../../src/components/cart/cartItemDescription.vue";
import { Product } from "../../../public/interfaces/Product";
import { Rating } from "../../../public/interfaces/Rating";

describe("Dropdown sorting UI component", () => {
  let wrapper: VueWrapper<any>;
  let rate: Rating;
  let product: Product;
  let quantity=3;
  beforeAll(() => {
    rate= { rate: 4, count: 10 };
    product= {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: rate,
      category: "Female Dresses",
      image: "dummy value",
    };
    wrapper = shallowMount(cartItemDescription,{props:{ product: product, quantity:quantity}});
  
  });

  it("displays correct title based on product",  () => {
    const div = wrapper.find(".details__description--title");
    expect(div.text()).toEqual(product.title);
  });

  it("displays correct category and quantity based on product",  () => {
    const div = wrapper.find(".details__description--category");
    expect(div.text()).toContain(quantity+"");
    expect(div.text()).toContain("x");
    expect(div.text()).toContain(product.category);

  });

    it("displays correct total price based on quantity", () => {
    const div = wrapper.find(".details__price");
    expect(div.text()).toEqual(quantity * product.price+ "");
  });
});
