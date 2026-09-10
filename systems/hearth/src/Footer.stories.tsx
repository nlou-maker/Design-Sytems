import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Sections/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [{ label: 'Privacy Policy', href: '#privacy' }],
    social: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    copyright: '© 2026 Healthy with Naudia. All rights reserved.',
  },
};

export const Minimal: Story = {
  args: { copyright: '© 2026 Hearth' },
};
