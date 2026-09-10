import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Welcome to Better Health',
    subheadline: 'Get personalized guidance from certified health coaches',
    cta: {
      label: 'Join the Waitlist',
      onClick: () => alert('Clicked!'),
    },
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
        Hero Image
      </div>
    ),
  },
};

export const WithoutCTA: Story = {
  args: {
    headline: 'Luffu',
    subheadline: 'Family-centered health coaching',
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#d7d7cb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
        }}
      >
        Hero Image
      </div>
    ),
  },
};
