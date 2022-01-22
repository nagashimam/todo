import { Story, Meta } from '@storybook/angular/types-6-0';
import mdx from './color.mdx';

export default {
  title: 'styles/color',
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const color: Story = () => ({
  template: `
      <h2>primary</h2>
      <h2 style="background-color:var(--primary); color:var(--secondary)">secondary</h2>
      <h2 style="color:var(--accent)">accent</h2>
    `,
});

export const Color = color.bind({});
Color.storyName = '色';
