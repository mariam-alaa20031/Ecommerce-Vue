import { shallowMount, VueWrapper} from "@vue/test-utils";
import productPrice from '../../../src/components/product/productPrice.vue'

describe('Product price UI component', () => {
  let wrapper:VueWrapper<any>;
  let price:number=100

  beforeEach(()=>{
       wrapper= shallowMount(productPrice, {props:{price:price,clickable:false}})
  })

  it('displays correct class based on prop', async () => {
       const div= wrapper.find(".details__price")
       expect(div.classes()[1]).toEqual("singleProductPage")
     

  });

    it('displays correct price text', async () => {
       const div= wrapper.find(".details__price")
       expect(div.text()).toEqual(price.toFixed(2)+" EGP")
     

  });

  
})

