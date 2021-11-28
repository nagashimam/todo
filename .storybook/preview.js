import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  paddings: {
    values: [
      { name: '1rem', value: '1rem' },
      { name: '2rem', value: '2rem' },
      { name: '3rem', value: '3rem' },
      { name: 'None', value: '0' },
    ],
    default: '1rem',
  },
}