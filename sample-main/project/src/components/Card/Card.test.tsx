import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders card with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <Card title="Card Title">
        <p>Content</p>
      </Card>
    );
    
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(
      <Card title="Title" subtitle="Subtitle">
        <p>Content</p>
      </Card>
    );
    
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(
      <Card image="test.jpg" imageAlt="Test image">
        <p>Content</p>
      </Card>
    );
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('renders footer when provided', () => {
    render(
      <Card footer={<button>Footer Button</button>}>
        <p>Content</p>
      </Card>
    );
    
    expect(screen.getByRole('button', { name: 'Footer Button' })).toBeInTheDocument();
  });

  it('calls onClick when clickable and clicked', () => {
    const handleClick = vi.fn();
    render(
      <Card clickable onClick={handleClick}>
        <p>Content</p>
      </Card>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard interaction when clickable', () => {
    const handleClick = vi.fn();
    render(
      <Card clickable onClick={handleClick}>
        <p>Content</p>
      </Card>
    );
    
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('has proper accessibility attributes when clickable', () => {
    render(
      <Card clickable onClick={vi.fn()}>
        <p>Content</p>
      </Card>
    );
    
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('supports custom data-testid', () => {
    render(
      <Card data-testid="custom-card">
        <p>Content</p>
      </Card>
    );
    
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });
});