import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "./index";
import { Separator } from "@wds-ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  title: "Marbella/ScrollArea",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <ScrollArea className="h-72 w-48 rounded-md border">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <>
          <div key={tag} className="text-sm">
            {tag}
          </div>
          <Separator className="my-2" />
        </>
      ))}
    </div>
  </ScrollArea>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
