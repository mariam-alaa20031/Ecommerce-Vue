import { shallowMount, VueWrapper } from '@vue/test-utils'
import sortDropdown from '@/components/sortDropdown.vue'

describe('sortDropdown.vue', () => {
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
    expect(options[3].text()).toBe('highest price')
  })
})
