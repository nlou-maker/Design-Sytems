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

const links = [
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Blog', href: '#' },
];

export const WithBrand: Story = {
  args: {
    brand: 'Luffu',
    links,
  },
};

export const BrandOnly: Story = {
  args: {
    brand: 'Luffu Editorial',
  },
};

export const LinksOnly: Story = {
  args: {
    links,
  },
};
