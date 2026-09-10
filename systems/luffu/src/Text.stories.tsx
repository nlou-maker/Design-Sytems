import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    size: 'base',
    color: 'primary',
    children:
      'Get personalized guidance from certified health coaches who understand your unique wellness goals.',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'secondary',
    children: 'Available to all members of our health coaching program',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
    children: 'Transform your health with expert, personalized coaching.',
  },
};

export const Secondary: Story = {
  args: {
    size: 'base',
    color: 'secondary',
    children: 'Secondary text for supporting information and captions.',
  },
};
