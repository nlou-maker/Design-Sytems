import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Text } from './Text';
import { Heading } from './Heading';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Parchment: Story = {
  args: {
    background: 'parchment',
    padding: 'md',
    children: (
      <div>
        <Heading level={2} size="md">
          Centered Content
        </Heading>
        <Text style={{ marginTop: '16px' }}>
          This container maintains a max-width of 1200px and centers on the page with
          proper padding.
        </Text>
      </div>
    ),
  },
};

export const Linen: Story = {
  args: {
    background: 'linen',
    padding: 'lg',
    children: (
      <div>
        <Heading level={2} size="md">
          Alternate Section
        </Heading>
        <Text style={{ marginTop: '16px' }} color="secondary">
          Use the Linen background to create visual separation between sections.
        </Text>
      </div>
    ),
  },
};

export const White: Story = {
  args: {
    background: 'white',
    padding: 'md',
    children: (
      <div>
        <Heading level={3} size="sm">
          White Background
        </Heading>
        <Text style={{ marginTop: '16px' }}>
          Pure white for maximum contrast when needed.
        </Text>
      </div>
    ),
  },
};
