import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Text } from './Text';
import { Heading } from './Heading';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Oat: Story = {
  args: {
    background: 'oat',
    padding: 'md',
    children: (
      <div>
        <Heading level={2} size="md">Centered Content</Heading>
        <Text style={{ marginTop: '12px' }}>
          This container maintains a max-width of 1160px and centers on the page.
        </Text>
      </div>
    ),
  },
};

export const Sand: Story = {
  args: {
    background: 'sand',
    padding: 'lg',
    children: (
      <div>
        <Heading level={2} size="md">Alternate Section</Heading>
        <Text style={{ marginTop: '12px' }} color="secondary">
          Use Sand to create visual separation between sections.
        </Text>
      </div>
    ),
  },
};
