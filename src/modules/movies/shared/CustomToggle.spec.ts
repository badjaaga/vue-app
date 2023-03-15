import { shallowMount } from "@vue/test-utils";
import CustomToggle from "./CustomToggle.vue";

describe("Toggle.vue", () => {
  let wrapper: any;
  const toggleOptions = ["Option 1", "Option 2", "Option 3"];
  beforeEach(() => {
    wrapper = shallowMount(CustomToggle, {
      props: { toggleOptions },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders the correct number of options", () => {
    const options = wrapper.findAll(".option");
    expect(options.length).toBe(toggleOptions.length);
  });

  it("selects the correct option when clicked", async () => {
    const options = wrapper.findAll(".option");
    const selectedIndex = 1;
    await options[selectedIndex].trigger("click");
    expect(wrapper.vm.selectedIndex).toBe(selectedIndex);
  });

  it("emits the selected option when clicked", async () => {
    const options = wrapper.findAll(".option");
    const selectedIndex = 2;
    await options[selectedIndex].trigger("click");
    expect(wrapper.emitted("toggle-option")).toBeTruthy();
    //@ts-ignore
    expect(wrapper.emitted("toggle-option")[0][0]).toBe(
      toggleOptions[selectedIndex]
    );
  });
});
