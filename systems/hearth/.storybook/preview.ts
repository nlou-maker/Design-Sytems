import type { Preview } from '@storybook/react';
import '../styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'oat',
      values: [
        { name: 'oat', value: '#F7F2E7' },
        { name: 'sand', value: '#EDE4D3' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#2E2A24' },
      ],
    },
  },
};

export default preview;
