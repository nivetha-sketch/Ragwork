import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()}>
        <p>Modal content</p>
      </Modal>
    );
    
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Modal Title">
        <p>Content</p>
      </Modal>
    );
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <p>Content</p>
      </Modal>
    );
    
    const closeButton = screen.getByTestId('modal-close-button');
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Content</p>
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not close on escape when closeOnEscapeKey is false', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} closeOnEscapeKey={false}>
        <p>Content</p>
      </Modal>
    );
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders footer when provided', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} footer={<button>Footer Button</button>}>
        <p>Content</p>
      </Modal>
    );
    
    expect(screen.getByRole('button', { name: 'Footer Button' })).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test" showCloseButton={false}>
        <p>Content</p>
      </Modal>
    );
    
    expect(screen.queryByTestId('modal-close-button')).not.toBeInTheDocument();
  });
});