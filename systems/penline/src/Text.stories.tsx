import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Regular: Story = {
  args: {
    weight: 'regular',
  },
};

export const Semibold: Story = {
  args: {
    weight: 'semibold',
  },
};

export const Ink: Story = {
  args: {
    color: 'ink',
  },
};

export const Graphite: Story = {
  args: {
    color: 'graphite',
  },
};

export const Signal: Story = {
  args: {
    color: 'signal',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: 400 }}>
      <Text size="sm">Small text is used for captions and metadata</Text>
      <Text size="md">Medium text is the default body size for most content</Text>
      <Text size="lg">Large text draws emphasis for important information</Text>
      <Text weight="semibold">Semibold text provides stronger visual hierarchy</Text>
      <Text color="graphite">Graphite text is secondary or contextual information</Text>
      <Text color="signal">Signal text highlights important or interactive elements</Text>
    </div>
  ),
};
