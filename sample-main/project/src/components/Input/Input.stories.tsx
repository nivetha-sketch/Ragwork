import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Search, User, Mail, Lock } from 'lucide-react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, icons, and various types. Fully accessible with proper labeling and error handling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    state: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Validation state of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    onChange: action('input-changed'),
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        label="Search"
        placeholder="Search items..."
        leftIcon={<Search size={16} />}
        onChange={action('search-changed')}
      />
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        leftIcon={<Mail size={16} />}
        onChange={action('email-changed')}
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        leftIcon={<Lock size={16} />}
        onChange={action('password-changed')}
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        label="Success State"
        placeholder="This looks good!"
        state="success"
        helperText="Great! This username is available."
        onChange={action('success-changed')}
      />
      <Input
        label="Warning State"
        placeholder="Be careful here"
        state="warning"
        helperText="This username is already taken, but you can still use it."
        onChange={action('warning-changed')}
      />
      <Input
        label="Error State"
        placeholder="Something went wrong"
        errorMessage="This field is required and must be at least 3 characters long."
        onChange={action('error-changed')}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        label="Small Input"
        placeholder="Small size input"
        size="sm"
        leftIcon={<User size={14} />}
        onChange={action('small-changed')}
      />
      <Input
        label="Medium Input"
        placeholder="Medium size input"
        size="md"
        leftIcon={<User size={16} />}
        onChange={action('medium-changed')}
      />
      <Input
        label="Large Input"
        placeholder="Large size input"
        size="lg"
        leftIcon={<User size={18} />}
        onChange={action('large-changed')}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this',
    disabled: true,
    helperText: 'This input is disabled for security reasons.',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    helperText: 'Please fill out this field.',
  },
};