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

export const TonePrimary: Story = {
  args: {
    tone: 'primary',
  },
};

export const ToneSecondary: Story = {
  args: {
    tone: 'secondary',
  },
};

export const ToneTertiary: Story = {
  args: {
    tone: 'tertiary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)', maxWidth: 480 }}>
      <Text size="sm" tone="primary">Small text is used for captions and metadata with tight letter-spacing</Text>
      <Text size="md" tone="primary">Medium text is the default body size for most editorial content and reading</Text>
      <Text size="lg" tone="primary">Large text (20px) provides emphasis for introductory copy and highlighted information</Text>
      <Text size="md" tone="secondary">Secondary tone is used for supporting copy and contextual information</Text>
      <Text size="md" tone="tertiary">Tertiary tone appears in footer links and subdued labels</Text>
    </div>
  ),
};
