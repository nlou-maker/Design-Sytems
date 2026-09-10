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
    <Card style={{ width: 320 }}>
      <Heading level="h4">Feature Card</Heading>
      <Text size="md" tone="secondary" style={{ marginTop: 'var(--spacing-12)' }}>
        The warmth of editorial typography meets the clarity of modern interface design.
      </Text>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card style={{ width: 320, overflow: 'hidden' }}>
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'var(--color-linen)',
          marginBottom: 0,
          marginTop: 'calc(var(--spacing-32) * -1)',
          marginLeft: 'calc(var(--spacing-32) * -1)',
          marginRight: 'calc(var(--spacing-32) * -1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-slate)',
        }}
      >
        Image Area
      </div>
      <div style={{ paddingTop: 'var(--spacing-32)' }}>
        <Heading level="h4">Card with Image</Heading>
        <Text size="sm" tone="tertiary" style={{ marginTop: 'var(--spacing-12)' }}>
          Image fills the card top with internal padding preserved below.
        </Text>
      </div>
    </Card>
  ),
};
