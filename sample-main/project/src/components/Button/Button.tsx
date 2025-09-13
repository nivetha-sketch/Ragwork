import React from 'react';
import { StyledButton, LoadingSpinner, IconWrapper } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  className,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={handleClick}
      type={type}
      className={className}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      {...props}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          {children}
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </>
      )}
    </StyledButton>
  );
};

export default Button;