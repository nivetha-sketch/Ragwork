import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Heart, Share, MoreHorizontal } from 'lucide-react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component for displaying content with optional headers, images, and footers. Supports different variants and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'flat'],
      description: 'Visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'This is a subtitle',
    children: (
      <p>This is the main content of the card. It can contain any React components or HTML elements.</p>
    ),
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    imageAlt: 'Beautiful mountain landscape',
    children: (
      <p>Captured during a hiking trip in the mountains. The serene beauty of nature never fails to amaze.</p>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1200px' }}>
      <Card variant="default" title="Default Card">
        <p>This is the default card variant with subtle shadow and border.</p>
      </Card>
      
      <Card variant="outlined" title="Outlined Card">
        <p>This card has a distinct border without shadow for a clean look.</p>
      </Card>
      
      <Card variant="elevated" title="Elevated Card">
        <p>This card has a prominent shadow that makes it appear lifted from the surface.</p>
      </Card>
      
      <Card variant="flat" title="Flat Card">
        <p>This card has a flat appearance with minimal styling for subtle integration.</p>
      </Card>
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    title: 'Product Card',
    subtitle: '$29.99',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    children: (
      <p>High-quality wireless headphones with noise cancellation and premium sound quality.</p>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="ghost" leftIcon={<Heart size={14} />}>
            Like
          </Button>
          <Button size="sm" variant="ghost" leftIcon={<Share size={14} />}>
            Share
          </Button>
        </div>
        <Button size="sm" variant="primary">
          Add to Cart
        </Button>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      <Card
        hoverable
        title="Hoverable Card"
        subtitle="Hover to see the effect"
        image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
      >
        <p>This card lifts up slightly when you hover over it.</p>
      </Card>
      
      <Card
        clickable
        title="Clickable Card"
        subtitle="Click me!"
        image="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
        onClick={action('card-clicked')}
      >
        <p>This entire card is clickable and will trigger an action.</p>
      </Card>
    </div>
  ),
};

export const ContentOnly: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', color: '#1f2937' }}>Custom Content</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#6b7280' }}>
          This card contains only custom content without predefined title or subtitle slots.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm">Action</Button>
          <Button size="sm" variant="ghost" rightIcon={<MoreHorizontal size={14} />}>
            More
          </Button>
        </div>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    variant: 'outlined',
    children: (
      <div>
        <img 
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
          alt="Card content"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div style={{ padding: '1rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>No Padding Card</h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            This card has no internal padding, giving you full control over the layout.
          </p>
        </div>
      </div>
    ),
  },
};