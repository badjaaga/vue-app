import { action } from "@storybook/addon-actions";

import CustomToggle from "@/modules/movies/shared/CustomToggle.vue";

export default {
  title: "Shared/Toggle component",
  component: CustomToggle,
  argTypes: {
    toggleOptions: ["test1", "test2", "test3"],
    toggleType: "Search by",
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#555555",
        },
      ],
    },
  },
};

const Template = (args) => ({
  components: { CustomToggle },
  setup() {
    return { args };
  },
  template: "<CustomToggle v-bind='args' @click='action'/>",
  methods: { action: action("clicked") },
});

export const Default = Template.bind({});

Default.args = {
  toggleOptions: ["test1", "test2", "test3"],
  toggleType: "Search by",
};
