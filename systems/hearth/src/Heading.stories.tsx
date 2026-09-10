import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: { level: 1, size: 'lg', children: 'Hearth' },
};

export const Medium: Story = {
  args: { level: 2, size: 'md', children: 'Coaching That Fits Your Life' },
};

export const Small: Story = {
  args: { level: 3, size: 'sm', children: 'Our Approach' },
};

export const BodyLarge: Story = {
  args: { level: 4, size: 'xl', children: 'One-on-one guidance, built around your real schedule.' },
};
