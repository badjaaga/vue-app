import { mount } from "@vue/test-utils";
import CustomLoader from "./CustomLoader.vue";

describe("CustomLoader", () => {
  it("renders the loading dots", () => {
    const wrapper = mount(CustomLoader);
    expect(wrapper.find(".loading").exists()).toBe(true);
  });
});
