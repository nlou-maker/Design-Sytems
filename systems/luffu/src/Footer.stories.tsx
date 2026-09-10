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

const links = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Instagram', href: '#' },
];

export const Complete: Story = {
  args: {
    copyright: '© 2026 Luffu. All rights reserved.',
    links,
  },
};

export const MinimalCopyright: Story = {
  args: {
    copyright: '© 2026 Luffu',
  },
};

export const WithLinks: Story = {
  args: {
    links,
  },
};
