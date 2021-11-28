import { Story, Meta } from '@storybook/angular/types-6-0';
import mdx from "./spacing.mdx"

export default {
    title: "styles/spacing",
    parameters: {
        docs: {
            page: mdx
        }
    }
} as Meta;

const Spacing: Story<any> = (args: any) => ({
    props: Object.keys(args),
    template: `
      <section>
        <h2>Group1</h2>
        <ul style="margin:0px;">
          <li>item1</li>
          <div style="background-color:#ff2700;padding-bottom:var(--item-spacing);"></div>
          <li>item2</li>
        </ul>
        <div style="background-color:#ff2700;padding-bottom:var(--group-spacing);"></div>
      </section>
      <section>
        <h2>Group2</h2>
        <ul style="margin:0px;">
          <li>item1</li>
          <div style="background-color:#ff2700;padding-bottom:var(--item-spacing);"></div>
          <li>item2</li>
        </ul>
        <div style="background-color:#ff2700;padding-bottom:var(--group-spacing);"></div>
      </section>
      <div style="background-color:#ff2700;padding-bottom:var(--section-spacing);"></div>
      <button>ボタン</button>
    `
});

export const heading = Spacing.bind({});
heading.storyName = "余白";