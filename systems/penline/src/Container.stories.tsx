import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <div
        style={{
          backgroundColor: 'var(--color-paper-alt)',
          padding: 'var(--spacing-5)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
        }}
      >
        <p>Content constrained to max-width with responsive padding</p>
      </div>
    </Container>
  ),
};

export const CustomMaxWidth: Story = {
  render: () => (
    <Container maxWidth="800px">
      <div
        style={{
          backgroundColor: 'var(--color-paper-alt)',
          padding: 'var(--spacing-5)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
        }}
      >
        <p>This container has a custom max-width of 800px</p>
      </div>
    </Container>
  ),
};
