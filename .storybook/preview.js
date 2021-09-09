import '../src/shared/styles/global.css';
import '../src/shared/styles/palette.css';
import '../src/shared/styles/typography.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}