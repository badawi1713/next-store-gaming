import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GameItem } from "../../../../components";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as ComponentMeta<typeof GameItem>;

// Membuat komponen template story

// Membuat functional component yang me-return komponen yang dijadikan story
// props yang digunakan dalam TS harus sama dengan komponen yang dijadikan story

const Template: ComponentStory<typeof GameItem> = (args) => <GameItem {...args} />;

// Komponen default
export const Default = Template.bind({});

// untuk mengambil images di story buat dulu folder statik di folder stories dan ubah script storboook dan tambahkan -s ./public
Default.args = {
    title: "Mobile Legend",
    platform: "Mobile",
    image: "/assets/img/Thumbnail-1.png",
    id: "1"
};
