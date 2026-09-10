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
    children: 'Heading text',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: 'h1',
    children: 'Heading 1 — Largest Display',
  },
};

export const H2: Story = {
  args: {
    level: 'h2',
    children: 'Heading 2 — Large Title',
  },
};

export const H3: Story = {
  args: {
    level: 'h3',
    children: 'Heading 3 — Section Title',
  },
};

export const H4: Story = {
  args: {
    level: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    level: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    level: 'h6',
    children: 'Heading 6 — Smallest',
  },
};

export const AllHeadings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Heading level="h1">H1 — Display Heading</Heading>
      <Heading level="h2">H2 — Large Title</Heading>
      <Heading level="h3">H3 — Section Title</Heading>
      <Heading level="h4">H4 — Subsection</Heading>
      <Heading level="h5">H5 — Minor Title</Heading>
      <Heading level="h6">H6 — Smallest Heading</Heading>
    </div>
  ),
};
