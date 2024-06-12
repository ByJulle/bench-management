import { StoryObj, Meta } from "@storybook/react";
import TextInput from "@components/form/TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Base: Story = {
  args: {
    label: "Input",
    id: "username",
    placeholder: "Placeholder",
    hasError: false,
    value: undefined,
    type: "text",
  },
};

export const Error: Story = {
  args: {
    label: "Invalid input example",
    id: "errorInput",
    value: "Invalid input",
    hasError: true,
    errorMessage: "Something went wrong",
    type: "text",
  },
};
