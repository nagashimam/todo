import { Story, Meta } from '@storybook/angular/types-6-0';
import mdx from './typography.mdx';

export default {
  title: 'styles/typography',
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

// TODO: XXXTemplateをHTMLを受け取ってStoryを返す関数にリファクタリングする
const HeadingTemplate: Story = () => ({
  template: `
      <h1>見出しレベル1</h1>
      <h2>見出しレベル2</h2>
      <h3>見出しレベル3</h3>
    `,
});

const ParagraphTemplate: Story = () => ({
  template: `
      <p>学習用のToDoアプリです。色々やってみたいことがあり、試しに作っただけのものです。お試しで使っていただいても構いませんが、動作保証はできません。</p>
      <p>開発が一定程度進んでから、アクセシビリティ試験を行い、結果を公表する予定です。</p>
    `,
});

const ImportantTemplate: Story = () => ({
  template: `
    <p>特に<span class="important">重要</span>なことを<span class="important">強調</span>したい場合に文字の色とサイズを変更する</p>
  `,
});

const OthersTemplate: Story = () => ({
  template: `
      <div class="mb-item-spacing">
        <label class="mr-item-spacing" for="text-input">入力欄のラベル</label><input id="text-input" type="text">
      </div>
      <span>何か簡単な短文</span>
    `,
});

export const Heading = HeadingTemplate.bind({});
Heading.storyName = '見出し';

export const Paragraph = ParagraphTemplate.bind({});
Paragraph.storyName = '段落';

export const Important = ImportantTemplate.bind({});
ImportantTemplate.storyName = '重要';

export const Others = OthersTemplate.bind({});
Others.storyName = 'その他(ラベルや短文など)';
