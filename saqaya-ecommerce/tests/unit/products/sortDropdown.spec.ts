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
    expect(options.length).toBe(5)
    expect(options[1].text()).toBe('least rated')
    expect(options[2].text()).toBe('most rated')
  })

  it('emits the selected sort option',async ()=>{
       wrapper.vm.$emit('sortProducts','price-ascending')
       await wrapper.vm.$nextTick()
       expect(wrapper.emitted().sortProducts).toBeTruthy()
       expect(wrapper.emitted().sortProducts[0]).toEqual(['price-ascending'])

  })
})

