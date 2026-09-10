import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    size: 'base',
    color: 'primary',
    children: 'Personalized coaching that meets you where you are, not where a program assumes you should be.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'secondary',
    children: 'Available to all active clients',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
    children: 'Real change starts with a plan you can actually keep.',
  },
};
