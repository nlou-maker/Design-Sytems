import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Default: Story = {
  args: {
    brand: 'Penline',
    links: sampleLinks,
  },
};

export const WithoutBrand: Story = {
  args: {
    links: sampleLinks,
  },
};

export const BrandOnly: Story = {
  args: {
    brand: 'Penline Design System',
  },
};
