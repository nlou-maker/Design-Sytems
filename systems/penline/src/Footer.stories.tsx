import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Default: Story = {
  args: {
    copyright: '© 2026 Penline. All rights reserved.',
    links: sampleLinks,
  },
};

export const Minimal: Story = {
  args: {
    copyright: '© 2026 Penline',
  },
};

export const WithLinks: Story = {
  args: {
    links: sampleLinks,
  },
};
