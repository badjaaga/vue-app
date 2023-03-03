import CustomInput from "@/modules/movies/shared/CustomInput";
import { action } from "@storybook/addon-actions";

export default {
  title: "Shared/Input component",
  component: CustomInput,
  argTypes: {
    value: {
      default: "Default value",
      control: {
        disable: false,
      },
    },
    placeholder: {
      control: {
        disable: false,
      },
    },
  },
};

const Template = (args) => ({
  components: { CustomInput },
  setup() {
    return { args };
  },
  template: "<CustomInput v-bind='args' @input='action' />",
  methods: { action: action("input") },
});

export const WithValue = Template.bind({});

WithValue.args = {
  value: "input value",
  placeholder: "placeholder",
};
