import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Book a Free Consult' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Learn More' },
};

export const PrimaryDisabled: Story = {
  args: { variant: 'primary', children: 'Book a Free Consult', disabled: true },
};
