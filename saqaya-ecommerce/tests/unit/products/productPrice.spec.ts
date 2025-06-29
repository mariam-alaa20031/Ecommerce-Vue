import { shallowMount, VueWrapper} from "@vue/test-utils";
import productPrice from '../../../src/components/product/productPrice.vue'

describe('Dropdown sorting UI component', () => {
  let wrapper:VueWrapper<any>;
  beforeEach(()=>{
       wrapper= shallowMount(productPrice)
  })

  it('displays correct class based on prop', async () => {
       await wrapper.setProps({price:100,clickable:false})
       const div= wrapper.find(".details__price")
       expect(div.classes()[1]).toEqual("singleProductPage")
     

  });

    it('displays correct price text', async () => {
       await wrapper.setProps({price:100,clickable:false})
       const div= wrapper.find(".details__price")
       expect(div.text()).toEqual("100 EGP")
     

  });

  
})

