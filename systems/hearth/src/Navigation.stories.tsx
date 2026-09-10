import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Sections/Navigation',
  component: Navigation,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: 'Hearth',
    links: [{ label: 'About', href: '#about' }, { label: 'Approach', href: '#approach' }],
    cta: { label: 'Book a Consult', href: '#book' },
  },
};

export const Minimal: Story = {
  args: { logo: 'Hearth', links: [] },
};
