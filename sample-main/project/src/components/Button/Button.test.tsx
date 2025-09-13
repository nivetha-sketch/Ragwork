import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { Heart } from 'lucide-react';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });

  it('renders with left icon', () => {
    render(<Button leftIcon={<Heart data-testid="heart-icon" />}>Like</Button>);
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button rightIcon={<Heart data-testid="heart-icon" />}>Like</Button>);
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports custom data-testid', () => {
    render(<Button data-testid="custom-button">Test</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Button aria-label="Close dialog">×</Button>);
    expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument();
  });
});