import { action } from "@storybook/addon-actions";

import PrimaryButton from "@/modules/movies/shared/PrimaryButton";

export default {
  title: "Shared/Button component",
  component: PrimaryButton,
  argTypes: {
    label: {
      control: {
        disable: false,
      },
    },
  },
};

const Template = (args) => ({
  components: { PrimaryButton },
  setup() {
    return { args };
  },
  template:
    "<PrimaryButton v-bind='args' @click='action'>{{ args.label }}</PrimaryButton>",
  methods: { action: action("clicked") },
});

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: "custom label",
};
