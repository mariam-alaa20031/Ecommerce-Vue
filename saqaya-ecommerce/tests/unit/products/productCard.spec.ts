import { shallowMount, VueWrapper } from "@vue/test-utils";
import productCard from '../../../src/components/product/productCard.vue';
import { Rating } from "../../../public/interfaces/Rating";
import { Product } from "../../../public/interfaces/Product";
import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '../../../src/stores/cartStore'

describe('Product Card component display', () => {
  let wrapper: VueWrapper<any>;
  let rate: Rating;
  let product: Product;
  let clickable: boolean;
  let count = 0;
  let store;
  
  beforeAll(() => {
    rate = { rate: 4, count: 10 };
    
    product = {
      id: 21,
      title: "wrap dress",
      price: 1000,
      description: "Feel comfortable, feminine in the dress!",
      rating: rate,
      category: "Female Dresses",
      image: "dummy value",
    };
  
    clickable = true;

    wrapper = shallowMount(productCard, {
      props: { product, clickable },
      global: {
         plugins: [createTestingPinia()],
   },
    });
     store = useCartStore() 
     store.cart=[product]
  });

  beforeEach(() => {
    if (count === 3) {
      clickable = !clickable;
      wrapper.setProps({ clickable });
    }
  });

  it('displays correct classes based on clickable set to true', async () => {
    const router = wrapper.find("router-link");
    const div = wrapper.find("div");
    expect(router.classes()[0]).toBe("view");
    expect(router.classes()[1]).toBeUndefined(); // 'only' class should not exist
    expect(div.classes()[0]).toBe("view__card");
    count++;
  });

  it('displays correct url based on id', async () => {
    const router = wrapper.find("router-link");
    expect(router.attributes("to")).toBe(`/product/${product.id}`);
    count++;
  });

  it('displays correct img', async () => {
    const img = wrapper.find("img");
    expect(img.attributes().src).toBe(product.image);
    count++;
  });

  it('displays correct classes based on clickable set to false', async () => {
    await wrapper.setProps({clickable:false})
    const divs = wrapper.findAll("div");
    expect(divs[0].classes()).toContain("only");
    expect(divs[1].classes()).toContain("view__card");
    expect(divs[1].classes()).toContain("only__card");
    count++;
  });

  it('displays correct img again', async () => {
    const img = wrapper.find("img");
    expect(img.attributes().src).toBe(product.image);
    count++;
  });
});
