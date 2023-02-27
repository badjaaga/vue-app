import HeadingLarge from "@/modules/movies/shared/HeadingLarge";

export default {
  title: "Shared/Heading",
  component: HeadingLarge,
  argTypes: {
    value: {
      control: {
        disable: false,
      },
    },
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
  components: { HeadingLarge },
  setup() {
    return { args };
  },
  template: "<HeadingLarge v-bind='args'>{{ args.value }}</HeadingLarge>",
});

export const WithValue = Template.bind({});

WithValue.args = {
  value: "Find movie",
};
