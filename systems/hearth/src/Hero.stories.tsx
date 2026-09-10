import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Coaching That Fits Your Real Life',
    subheadline: 'One-on-one nutrition and wellness guidance, built around your schedule — not a program.',
    cta: { label: 'Book a Free Consult', onClick: () => alert('Clicked!') },
    image: (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#B8916A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3d2f22',
        }}
      >
        Hero Image
      </div>
    ),
  },
};
