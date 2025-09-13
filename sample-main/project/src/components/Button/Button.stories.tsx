import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Heart, Download, Plus } from 'lucide-react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and full accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    onClick: action('primary-clicked'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" onClick={action('primary-clicked')}>Primary</Button>
      <Button variant="secondary" onClick={action('secondary-clicked')}>Secondary</Button>
      <Button variant="outline" onClick={action('outline-clicked')}>Outline</Button>
      <Button variant="ghost" onClick={action('ghost-clicked')}>Ghost</Button>
      <Button variant="danger" onClick={action('danger-clicked')}>Danger</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm" onClick={action('small-clicked')}>Small</Button>
      <Button size="md" onClick={action('medium-clicked')}>Medium</Button>
      <Button size="lg" onClick={action('large-clicked')}>Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button leftIcon={<Plus size={16} />} onClick={action('left-icon-clicked')}>Add Item</Button>
      <Button rightIcon={<Download size={16} />} onClick={action('right-icon-clicked')}>Download</Button>
      <Button leftIcon={<Heart size={16} />} rightIcon={<Download size={16} />} onClick={action('both-icons-clicked')}>
        Save & Download
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};