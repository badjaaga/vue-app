import { mount } from "@vue/test-utils";
import DateFormat from "./DateFormat.vue";

describe("DateComponent", () => {
  let wrapper: any;

  beforeEach(() => {
    const propsData = {
      value: "2022-05-15T18:28:00.000Z",
    };
    wrapper = mount(DateFormat, { propsData });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders the valueComputed prop as text", () => {
    expect(wrapper.text()).toContain("2022");
  });

  it("returns an empty string if the value prop is not provided", async () => {
    await wrapper.setProps({ value: "" });
    expect(wrapper.text()).toBe("");
  });
});
