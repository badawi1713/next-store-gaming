import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "../../../../components";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// Membuat komponen template story

// Membuat functional component yang me-return komponen yang dijadikan story
// props yang digunakan dalam TS harus sama dengan komponen yang dijadikan story

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// Komponen default
export const Default = Template.bind({});

Default.args = {
  label: "Nama Lengkap",
};
