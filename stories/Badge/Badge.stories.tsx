import { StoryObj, Meta } from "@storybook/react";
import Badge, { BadgeType } from "./../../app/components/Badge";
const meta: Meta<typeof Badge> = {
  component: Badge,
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    type: BadgeType.PRIMARY,
    label: "John Doe",
  },
  argTypes: {
    type: {
      options: ["Primary", "Secondary", "Success", "Warning", "Error"],
      mapping: {
        Primary: BadgeType.PRIMARY,
        Secondary: BadgeType.SECONDARY,
        Success: BadgeType.SUCCESS,
        Warning: BadgeType.WARNING,
        Error: BadgeType.ERROR,
      },
    },
  },
};
