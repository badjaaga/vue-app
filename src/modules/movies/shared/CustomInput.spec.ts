import { mount } from "@vue/test-utils";
import CustomInput from "./CustomInput.vue";

describe("CustomInput", () => {
  it("renders correctly with a given value", () => {
    const wrapper = mount(CustomInput, {
      props: {
        value: "Test Value",
      },
    });

    expect(wrapper.find("input").element.value).toBe("Test Value");
  });

  it('emits an "update:value" event when the input value changes', async () => {
    const wrapper = mount(CustomInput);

    await wrapper.find("input").setValue("New Value");
    expect(wrapper.emitted("update:value")).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted("update:value")[0]).toEqual(["New Value"]);
  });
});
