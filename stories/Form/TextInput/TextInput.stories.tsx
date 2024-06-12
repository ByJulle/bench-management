import { StoryObj, Meta } from "@storybook/react";
import TextInput from "../../../app/components/form/TextInput";
import "../../../app/styles/tailwind.css";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Base: Story = {
  args: {
    label: "Input",
    inputName: "username",
  },
};

export const Error: Story = {
  args: {
    label: "Input",
  },
};
