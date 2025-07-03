import { shallowMount, VueWrapper } from "@vue/test-utils";
import menuNav from "../../../src/components/nav/menuNav.vue";

describe("Menu nav component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(menuNav, { props: { cartSelected: false } });
  });

  it("renders menu with correct number of bars", () => {
    const menu = wrapper.findAll(".menu__bar");
    expect(menu.length).toBe(3);
  });

  it("assigns menu--active class when cart selected is true", async () => {
    await wrapper.setProps({cartSelected:true})
    const button = wrapper.find(".menu");
    expect(button.classes()).toContain("menu--active");
  });

  it("removes menu--active class when cart is not selected ", async () => {
    await wrapper.setProps({cartSelected:false})
    const button = wrapper.find(".menu");
    expect(button.classes()).toHaveLength(1);
  });
});
