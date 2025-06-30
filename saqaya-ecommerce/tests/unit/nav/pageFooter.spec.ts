import { shallowMount, VueWrapper } from "@vue/test-utils";
import pageFooter from "../../../src/components/nav/pageFooter.vue"; // update the path if needed

describe("Page footer component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(pageFooter);
  });

  it("has first three elements with correct classes", () => {
    const root = wrapper.find(".footer");
    expect(root.exists()).toBe(true);
    expect(wrapper.find(".footer__container1").exists()).toBe(true);
    expect(wrapper.find(".footer__grid").exists()).toBe(true);
  });

  it("renders 3 items with class 'footer__item'", () => {
    const items = wrapper.findAll(".footer__item");
    expect(items.length).toBe(3);
  });

  it("renders all page links with class 'footer__pages'", () => {
    const links = wrapper.findAll(".footer__pages");
    expect(links.length).toBe(wrapper.vm.values.length);
  });

  it("has address section with correct classes", () => {
    expect(wrapper.find(".footer__address").exists()).toBe(true);
    expect(wrapper.find(".footer__title").exists()).toBe(true);
    expect(wrapper.find(".footer__subtitle").exists()).toBe(true);
    expect(wrapper.find(".footer__email").exists()).toBe(true);
    expect(wrapper.find(".footer__contact").exists()).toBe(true);
  });

  it("has second container with class 'footer__container2'", () => {
    expect(wrapper.find(".footer__container2").exists()).toBe(true);
  });

  it("renders copyright section with class 'footer__copyright'", () => {
    expect(wrapper.find(".footer__copyright").exists()).toBe(true);
    expect(wrapper.find(".footer__copyright").html()).toContain("Copyright");
  });

  it("renders social section with correct classes", () => {
    const social = wrapper.find(".footer__social");
    expect(social.exists()).toBe(true);
    expect(social.classes()).toContain("footer__social");
  });

  it("renders social icons with correct classes", () => {
    expect(wrapper.find(".fa-twitter").exists()).toBe(true);
    expect(wrapper.find(".fa-facebook-square").exists()).toBe(true);
    expect(wrapper.find(".fa-instagram").exists()).toBe(true);
    expect(wrapper.find(".bi-pinterest").exists()).toBe(true);
  });
});
