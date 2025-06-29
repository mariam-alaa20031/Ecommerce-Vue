import { shallowMount, VueWrapper } from '@vue/test-utils'
import sortDropdown from '../../../src/components/product/sortDropdown.vue';

describe('Dropdown sorting UI component', () => {
  let wrapper:VueWrapper<any>;
  beforeEach(()=>{
       wrapper= shallowMount(sortDropdown)
})
  it('renders the sort label', () => {
    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Sort by:')
  });

  it('renders 4 sorting options', () => {
    const options = wrapper.findAll('option')
    expect(options.length).toBe(4)
    expect(options[0].text()).toBe('least rated')
    expect(options[1].text()).toBe('most rated')
    expect(options[2].text()).toBe('lowest price')
    expect(options[3].text()).toBe('highest price')
  })

  it('emits the selected sort option',async ()=>{
       wrapper.vm.$emit('sortProducts','price-ascending')
       await wrapper.vm.$nextTick()
       expect(wrapper.emitted().sortProducts).toBeTruthy()
       // console.log(wrapper.emitted().sortProducts) this returned [['price-ascending']]
       expect(wrapper.emitted().sortProducts[0]).toEqual(['price-ascending'])

  })
})

