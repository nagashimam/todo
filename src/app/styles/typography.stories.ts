import { Story, Meta } from '@storybook/angular/types-6-0';
import mdx from "./typography.mdx"

export default {
  title: "styles/typography",
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Heading: Story<any> = (args: any) => ({
  props: Object.keys(args),
  template: `
      <h1>見出しレベル1</h1>
      <h2>見出しレベル2</h2>
      <h3>見出しレベル3</h3>
    `
});

const Paragraph: Story<any> = (args: any) => ({
  props: Object.keys(args),
  template: `
      <p>学習用のToDoアプリです。色々やってみたいことがあり、試しに作っただけのものです。お試しで使っていただいても構いませんが、動作保証はできません。</p>
      <p>開発が一定程度進んでから、アクセシビリティ試験を行い、結果を公表する予定です。</p>
    `
})

const Important: Story<any> = (args:any) => ({
  props: Object.keys(args),
  template: `
    <p>特に<span class="important">重要</span>なことを<span class="important">強調</span>したい場合に文字の色とサイズを変更する</p>
  `
})

const Others: Story<any> = (args: any) => ({
  props: Object.keys(args),
  template: `
      <div class="mb-item-spacing">
        <label class="mr-item-spacing" for="text-input">入力欄のラベル</label><input id="text-input" type="text">
      </div>
      <span>何か簡単な短文</span>
    `
})


export const heading = Heading.bind({});
heading.storyName = "見出し";

export const paragraph = Paragraph.bind({});
paragraph.storyName = "段落"

export const important = Important.bind({});
important.storyName = "重要"

export const others = Others.bind({});
others.storyName = "その他(ラベルや短文など)"