import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible modal component with backdrop, keyboard navigation, and customizable content. Supports different sizes and various interaction patterns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the modal',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking outside closes the modal',
    },
    closeOnEscapeKey: {
      control: 'boolean',
      description: 'Whether pressing ESC closes the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in header',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithTrigger = ({ children, ...modalProps }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...modalProps}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          action('modal-closed')();
        }}
      >
        {children}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWithTrigger title="Welcome">
      <p>This is a basic modal with some content. You can close it by clicking the X button, pressing ESC, or clicking outside the modal.</p>
      <p>The modal is fully accessible with proper focus management and keyboard navigation.</p>
    </ModalWithTrigger>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <ModalWithTrigger
      title="Confirm Action"
      footer={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="ghost" onClick={action('cancel-clicked')}>Cancel</Button>
          <Button variant="danger" onClick={action('confirm-clicked')}>Delete</Button>
        </div>
      }
    >
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </ModalWithTrigger>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ModalWithTrigger size="sm" title="Small Modal">
        <p>This is a small modal perfect for simple confirmations or brief messages.</p>
      </ModalWithTrigger>
      
      <ModalWithTrigger size="md" title="Medium Modal">
        <p>This is a medium modal suitable for forms or moderate amounts of content.</p>
        <p>It provides a good balance between space and focus.</p>
      </ModalWithTrigger>
      
      <ModalWithTrigger size="lg" title="Large Modal">
        <p>This is a large modal that can accommodate more complex layouts and content.</p>
        <p>Perfect for detailed forms, data tables, or rich media content.</p>
        <p>The modal automatically handles scrolling when content exceeds the available space.</p>
      </ModalWithTrigger>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ModalWithTrigger title="Long Content Example" size="lg">
      <div>
        <h3>Terms and Conditions</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
      </div>
    </ModalWithTrigger>
  ),
};

export const NoCloseButton: Story = {
  render: () => (
    <ModalWithTrigger
      title="Custom Close"
      showCloseButton={false}
      closeOnBackdropClick={false}
      footer={
        <Button onClick={action('custom-close')}>Close Modal</Button>
      }
    >
      <p>This modal has no close button in the header and doesn't close when clicking outside.</p>
      <p>You must use the custom close button in the footer.</p>
    </ModalWithTrigger>
  ),
};