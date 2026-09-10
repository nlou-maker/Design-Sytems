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
          backgroundColor: 'var(--color-linen)',
          padding: 'var(--spacing-34)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          color: 'var(--color-graphite)',
          fontFamily: 'var(--font-abc-arizona-sans)',
        }}
      >
        <p>Content constrained to max-width 1200px with responsive padding</p>
      </div>
    </Container>
  ),
};

export const Narrow: Story = {
  render: () => (
    <Container maxWidth="640px">
      <div
        style={{
          backgroundColor: 'var(--color-linen)',
          padding: 'var(--spacing-34)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          color: 'var(--color-graphite)',
          fontFamily: 'var(--font-abc-arizona-sans)',
        }}
      >
        <p>Narrower max-width (640px) for reading measures</p>
      </div>
    </Container>
  ),
};
