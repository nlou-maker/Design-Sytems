import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Sections/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'luffu',
    links: [{ label: 'About', href: '#about' }],
    cta: { label: 'Join the Waitlist', href: '#waitlist' },
  },
};

export const Minimal: Story = {
  args: {
    logo: 'luffu',
    links: [],
  },
};
