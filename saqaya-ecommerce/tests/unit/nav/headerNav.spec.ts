import { shallowMount, VueWrapper } from "@vue/test-utils";
import headerNav from "../../../src/components/nav/headerNav.vue";
import '../../../src/assets/logo.png';
import '../../../src/assets/shopping-cart.png'

describe("Header links component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(headerNav);

  });

  it("renders 3 links", () => {
    const links= wrapper.findAll(".links")
    expect(links.length).toBe(3);
  });


  it("assigns correct classes when 'Home' is clicked", async () => {
    const links = wrapper.findAll("a");
    await links[0].trigger("click");
    expect(links[0].classes()).toContain("links__active");
    expect(links[1].classes()).toContain("links__default");
    expect(links[2].classes()).toContain("links__default");

  });

  it("assigns correct classes when 'Products' is clicked", async () => {
    const links = wrapper.findAll("a");
    await links[1].trigger("click");
    expect(links[0].classes()).toContain("links__default");
    expect(links[1].classes()).toContain("links__active");
    expect(links[2].classes()).toContain("links__default");
 
  });


  it("assigns correct classes when 'Contact us' is clicked", async () => {
    const links = wrapper.findAll("a");
    await links[2].trigger("click");
    expect(links[0].classes()).toContain("links__default");
    expect(links[1].classes()).toContain("links__default");
    expect(links[2].classes()).toContain("links__active");


  });
});
