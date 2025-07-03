import { shallowMount, VueWrapper } from "@vue/test-utils";
import menuNav from "../../../src/components/nav/menuNav.vue";

describe("Menu nav component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(menuNav, { props: { cartSelected: false } });
  });

  it("renders menu with correct number of bars", () => {
    const menu = wrapper.findAll(".menu__button--bar");
    expect(menu.length).toBe(3);
  });


  it("renders menu panel when clicked", async () => {
    wrapper.vm.clicked=true
    await wrapper.vm.$nextTick()
    const button = wrapper.findAll(".menu-panel");
    expect(button).toHaveLength(1);
  });
});
