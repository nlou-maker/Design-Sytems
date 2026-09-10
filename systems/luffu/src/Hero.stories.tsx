import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Button } from './Button';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Luffu',
    subtitle: 'Editorial design meets human-centered interface design',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Care for Those You Love',
    subtitle: 'A warm, restrained design system for family health and wellness',
  },
  render: (args) => (
    <Hero {...args}>
      <div style={{ display: 'flex', gap: 'var(--spacing-20)', justifyContent: 'center' }}>
        <Button variant="primary">Join the Waitlist</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </Hero>
  ),
};

export const Minimal: Story = {
  args: {
    title: 'Editorial Typography',
  },
};
