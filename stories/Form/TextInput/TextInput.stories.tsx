import { StoryObj, Meta } from "@storybook/react";
import TextInput from "../../../app/components/form/TextInput";

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
  },
};

export const Error: Story = {
  args: {
    label: "This is a label",
    id: "errorInput",
    value: "Invalid input",
    hasError: true,
    errorMessage: "Sonmething went wrong",
  },
};
