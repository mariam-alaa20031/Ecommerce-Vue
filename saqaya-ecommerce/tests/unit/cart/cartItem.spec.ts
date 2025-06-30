import { shallowMount, VueWrapper } from "@vue/test-utils";
import cartItem from "../../../src/components/cart/cartItem.vue";
import { Product } from "../../../public/interfaces/Product";

describe("cart item component", () => {
  let wrapper: VueWrapper<any>;
  let mockStore: any;
  let product1: Product;
  let product2: Product;

  beforeAll(() => {
    product1 = {
      id: 1,
      title: "Dress 1",
      price: 100,
      description: "A lovely dress",
      category: "Clothes",
      rating: { rate: 4, count: 10 },
      image: "image1.jpg",
    };

    product2 = {
      id: 2,
      title: "Dress 2",
      price: 200,
      description: "Another lovely dress",
      category: "Clothes",
      rating: { rate: 5, count: 20 },
      image: "image2.jpg",
    };

    mockStore = {
      state: {
        cart: [product1, product2],
        products: [product1, product2],
      },
      getters: {
        cartProductCounts: {
          1: 2,
          2: 1,
        },
      },
    };

    wrapper = shallowMount(cartItem, {
      global: {
        mocks: {
          $store: mockStore,
        },
      },
    });
  });

  it("displays all cart items based on cartProductCounts keys", () => {
    const cartItems = wrapper.findAll(".cart");
    expect(cartItems.length).toBe(2);
  });

  it("displays product images correctly", () => {
    const imgs = wrapper.findAll(".cart__img");
    expect(imgs.length).toBe(2);
    expect(imgs[0].attributes().src).toBe(product1.image);
    expect(imgs[1].attributes().src).toBe(product2.image);
  });

  it("displays the correct total sum", () => {
    const total = wrapper.find(".cart__total--price");
    expect(total.text()).toBe((product1.price+product2.price).toFixed(2)+ " LE");
  });

  it("renders checkout button and router-link", () => {
    const checkout = wrapper.find(".checkout");
    const button = wrapper.find(".checkout__button");
    expect(checkout.exists()).toBe(true);
    expect(button.exists()).toBe(true);
    expect(button.text().toLowerCase()).toContain("checkout");
  });

  it("displays correct class structure", () => {
    expect(wrapper.find(".cart__total").exists()).toBe(true);
    expect(wrapper.find(".cart__total--display").exists()).toBe(true);
    expect(wrapper.find(".cart__total--price").exists()).toBe(true);
    expect(wrapper.find(".checkout__button").classes()).toContain("checkout__button");
  });
});
