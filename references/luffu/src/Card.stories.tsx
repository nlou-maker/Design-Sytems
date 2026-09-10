import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCard: Story = {
  args: {
    category: 'Health Coaching',
    title: 'Personalized Wellness Plans',
    description: 'Get customized nutrition and lifestyle guidance tailored to your goals and health status.',
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#b3c4cd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
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
    description: 'This is a simple card with just text content.',
  },
};
