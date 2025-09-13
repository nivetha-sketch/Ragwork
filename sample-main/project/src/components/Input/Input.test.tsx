import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';
import { Search } from 'lucide-react';

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('renders input with placeholder', () => {
    render(<Input placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('shows error message', () => {
    render(<Input label="Email" errorMessage="Please enter a valid email" />);
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<Input label="Password" helperText="Must be at least 8 characters" />);
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });

  it('renders with left icon', () => {
    render(<Input leftIcon={<Search data-testid="search-icon" />} />);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Input label="Required Field" required />);
    expect(screen.getByText(/\*/)).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('has proper accessibility attributes', () => {
    render(
      <Input
        label="Email"
        helperText="Enter your email address"
        required
      />
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby');
    expect(input).toBeRequired();
  });

  it('supports different input types', () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" />);
    expect(screen.getByLabelText('')).toHaveAttribute('type', 'password');
  });
});