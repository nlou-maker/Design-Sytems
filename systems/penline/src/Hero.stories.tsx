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
    title: 'Welcome to Penline',
    subtitle: 'A modern design system for AI-first interfaces',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Build Faster',
    subtitle: 'With Penline design system and components',
  },
  render: (args) => (
    <Hero {...args}>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
        <Button variant="primary">Get Started</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </Hero>
  ),
};

export const Minimal: Story = {
  args: {
    title: 'Create Amazing Things',
  },
};
