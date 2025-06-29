import { shallowMount, VueWrapper} from "@vue/test-utils";
import productRating from '../../../src/components/product/productRating.vue'

describe('Dropdown sorting UI component', () => {
  let wrapper:VueWrapper<any>;
  beforeEach(()=>{
       wrapper= shallowMount(productRating)
  })
  it('attaches correct classes for a rating of 1', async () => {
       await wrapper.setProps({rating:1})
       const stars= wrapper.findAll("svg")
       expect(stars[0].classes()).toEqual(['star'])
       expect(stars[1].classes()).toEqual(['blank'])
       expect(stars[2].classes()).toEqual(['blank'])
       expect(stars[3].classes()).toEqual(['blank'])
       expect(stars[4].classes()).toEqual(['blank'])

  });

  it('attaches correct classes for a rating of 2', async () => {
       await wrapper.setProps({rating:1})
       const stars= wrapper.findAll("svg")
       expect(stars[0].classes()).toEqual(['star'])
       expect(stars[1].classes()).toEqual(['star'])
       expect(stars[2].classes()).toEqual(['blank'])
       expect(stars[3].classes()).toEqual(['blank'])
       expect(stars[4].classes()).toEqual(['blank'])

  });

    it('attaches correct classes for a rating of 3', async () => {
       await wrapper.setProps({rating:1})
       const stars= wrapper.findAll("svg")
       expect(stars[0].classes()).toEqual(['star'])
       expect(stars[1].classes()).toEqual(['star'])
       expect(stars[2].classes()).toEqual(['star'])
       expect(stars[3].classes()).toEqual(['blank'])
       expect(stars[4].classes()).toEqual(['blank'])

  });

    it('attaches correct classes for a rating of 4', async () => {
       await wrapper.setProps({rating:1})
       const stars= wrapper.findAll("svg")
       expect(stars[0].classes()).toEqual(['star'])
       expect(stars[1].classes()).toEqual(['star'])
       expect(stars[2].classes()).toEqual(['star'])
       expect(stars[3].classes()).toEqual(['star'])
       expect(stars[4].classes()).toEqual(['blank'])

  });

  it('attaches correct classes for a rating of 5', async () => {
       await wrapper.setProps({rating:5})
       const stars= wrapper.findAll("svg")
       expect(stars[0].classes()).toEqual(['star'])
       expect(stars[1].classes()).toEqual(['star'])
       expect(stars[2].classes()).toEqual(['star'])
       expect(stars[3].classes()).toEqual(['star'])
       expect(stars[4].classes()).toEqual(['star'])

  });


  
})

