import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <Heading level="h3">Card Title</Heading>
      <Text style={{ marginTop: 'var(--spacing-2)' }}>
        This is a card component with content inside. It has a subtle shadow and rounded corners.
      </Text>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <Heading level="h3">Feature Card</Heading>
      <Text size="sm" style={{ marginTop: 'var(--spacing-2)', marginBottom: 'var(--spacing-3)' }}>
        Explore advanced design system features and components.
      </Text>
      <button
        style={{
          backgroundColor: 'var(--color-signal)',
          color: 'white',
          border: 'none',
          padding: 'var(--spacing-2) var(--spacing-4)',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
        }}
      >
        Learn More
      </button>
    </Card>
  ),
};
