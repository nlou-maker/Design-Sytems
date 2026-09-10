import type { Preview } from '@storybook/react';
import '../styles/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'parchment',
      values: [
        {
          name: 'parchment',
          value: '#f5f5ee',
        },
        {
          name: 'linen',
          value: '#e4e7da',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#2f3136',
        },
      ],
    },
  },
};

export default preview;
