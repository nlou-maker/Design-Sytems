import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Luffu Editorial Heading',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Display Heading at 64px',
  },
};

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Heading at 48px',
  },
};

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Section Heading at 48px',
  },
};

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Subheading at 40px',
  },
};

export const AllHeadings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)', maxWidth: 800 }}>
      <div>
        <Heading level="h1">Display (64px, -3.2px tracking)</Heading>
      </div>
      <div>
        <Heading level="h2">Heading (48px, -2.02px tracking)</Heading>
      </div>
      <div>
        <Heading level="h3">Heading (48px, -2.02px tracking)</Heading>
      </div>
      <div>
        <Heading level="h4">Subheading (40px, -1.24px tracking)</Heading>
      </div>
      <div>
        <Heading level="h5">Body Large (20px, -0.32px tracking)</Heading>
      </div>
      <div>
        <Heading level="h6">Body (16px, -0.32px tracking)</Heading>
      </div>
    </div>
  ),
};
