import { shallowMount } from "@vue/test-utils";
import PrimaryButton from "@/modules/movies/shared/PrimaryButton.vue";

describe("PrimaryButton.vue", () => {
  it("renders primary button", () => {
    const button = shallowMount(PrimaryButton);
    expect(button).toBeTruthy();
  });
});
