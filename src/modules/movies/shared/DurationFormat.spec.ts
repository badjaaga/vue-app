import { shallowMount } from "@vue/test-utils";
import MovieDuration from "./DurationFormat.vue";

describe("Movie Duration ", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(MovieDuration, {
      props: {
        value: "PT120M",
      },
    });
  });

  it("renders the correct hours and minutes", () => {
    expect(wrapper.text()).toContain("2 h 0 min");
  });
});
