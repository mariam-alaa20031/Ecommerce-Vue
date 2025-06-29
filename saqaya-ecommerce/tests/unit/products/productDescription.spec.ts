import { shallowMount, VueWrapper } from "@vue/test-utils";
import productDescription from "../../../src/components/product/productDescription.vue";
import { Product } from "../../../public/interfaces/Product";
import { Rating } from "../../../public/interfaces/Rating";

describe("Dropdown sorting UI component", () => {
  let wrapper: VueWrapper<any>;
  let rate: Rating;
  let prod: Product;
  beforeAll(() => {
    rate= { rate: 4, count: 10 };
    prod= {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: rate,
      category: "Female Dresses",
      image: "dummy value",
    };
    wrapper = shallowMount(productDescription,{props:{ product: prod }});
  
  });

  it("displays correct title based on product",  () => {
    const div = wrapper.find(".description__title");
    expect(div.text()).toEqual(prod.title);
  });

  it("displays correct category based on product",  () => {
    const div = wrapper.find(".description__category");
    expect(div.text()).toEqual("Category: "+prod.category);
  });

    it("displays correct description based on product", () => {
    const div = wrapper.find(".description__details");
    expect(div.text()).toEqual("Description: "+prod.description);
  });
});
