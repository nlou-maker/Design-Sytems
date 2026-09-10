import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCard: Story = {
  args: {
    category: 'Nutrition Coaching',
    title: 'Build Habits That Stick',
    description: 'Weekly check-ins and a plan that adapts to your real life, not a rigid template.',
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#C9A97E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d2f22',
        }}
      >
        Image
      </div>
    ),
  },
};

export const Simple: Story = {
  args: {
    title: 'Simple Card',
    description: 'A card with just text content, no image.',
  },
};
