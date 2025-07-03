import { shallowMount, VueWrapper } from "@vue/test-utils";
import pageHeader from "../../../src/components/nav/pageHeader.vue";
import '../../../src/assets/logo.png';
import '../../../src/assets/shopping-cart.png'

describe("Page header component", () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(pageHeader);
    wrapper.vm.clickedHome=false;
    wrapper.vm.clickedProducts=false;
    wrapper.vm.clickedContact=false;
    wrapper.vm.cartSeleced=false;
  });

  it("renders root header with class 'header'", () => {
    const header = wrapper.find(".header");
    expect(header.exists()).toBe(true);
  });



  it("renders left section and logo when cart is not selected", async () => {
    wrapper.vm.cartSelected = false;
    await wrapper.vm.$nextTick();
    const left = wrapper.find(".header__left");
    const logo = wrapper.find(".header__logo");
    expect(left.exists()).toBe(true);
    expect(logo.exists()).toBe(true);
  });

  it("renders right section and cart icon", () => {
    const right = wrapper.find(".header__right");
    const cartIcon = wrapper.find(".header__cart");
    expect(right.exists()).toBe(true);
    expect(cartIcon.exists()).toBe(true);
  });

  it("applies correct class to clicked link", async () => {
    const links = wrapper.findAll("a");
    expect(links.length).toBeGreaterThan(2);

    await links[0].trigger("click");
    expect(links[0].classes()).toContain("links__active");
    expect(links[1].classes()).toContain("links__default");
    expect(links[2].classes()).toContain("links__default");

    await links[1].trigger("click");
    expect(links[1].classes()).toContain("links__active");
    expect(links[0].classes()).toContain("links__default");

    await links[2].trigger("click");
    expect(links[2].classes()).toContain("links__active");
    expect(links[0].classes()).toContain("links__default");
    expect(links[1].classes()).toContain("links__default");
  });

  it("displays cartDrawer when cartSelected is true", async () => {
    wrapper.vm.cartSelected= true;
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: "cartDrawer" }).exists()).toBe(true);
  });

  it("hides header left and right when cartSelected is true", async () => {
    wrapper.vm.cartSelected= true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".header__left").exists()).toBe(false);
    expect(wrapper.find(".header__right").exists()).toBe(false);
  });

  it("closes cartDrawer when 'close' is emitted", async () => {
    wrapper.vm.cartSelected= true;
    await wrapper.vm.$nextTick();
    const drawer = wrapper.findComponent({ name: "cartDrawer" });
    expect(drawer.exists()).toBe(true);
    await drawer.vm.$emit("close");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.cartSelected).toBe(false);
  });
});
