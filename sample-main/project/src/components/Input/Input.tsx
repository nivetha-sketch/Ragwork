import React from 'react';
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper,
  HelperText,
} from './Input.styled';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  onSubmit,
  onKeyDown,
  type = 'text',
  size = 'md',
  state = 'default',
  disabled = false,
  required = false,
  leftIcon,
  rightIcon,
  helperText,
  errorMessage,
  className,
  id,
  name,
  autoComplete,
  'data-testid': dataTestId,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = `${inputId}-helper`;
  const finalState = errorMessage ? 'error' : state;
  const finalHelperText = errorMessage || helperText;

  const inputStyle = {
    paddingLeft: leftIcon ? (size === 'sm' ? '2.5rem' : size === 'lg' ? '3.5rem' : '3rem') : undefined,
    paddingRight: rightIcon ? (size === 'sm' ? '2.5rem' : size === 'lg' ? '3.5rem' : '3rem') : undefined,
  };

  return (
    <InputContainer className={className}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Label>
      )}
      
      <InputWrapper>
        {leftIcon && (
          <IconWrapper $position="left" $size={size}>
            {leftIcon}
          </IconWrapper>
        )}
        
        <StyledInput
          id={inputId}
          name={name}
          type={type}
          size={size}
          state={finalState}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          style={inputStyle}
          data-testid={dataTestId}
          aria-describedby={finalHelperText ? helperTextId : ariaDescribedBy}
          {...props}
        />
        
        {rightIcon && (
          <IconWrapper $position="right" $size={size}>
            {rightIcon}
          </IconWrapper>
        )}
      </InputWrapper>
      
      {finalHelperText && (
        <HelperText id={helperTextId} $state={finalState}>
          {finalHelperText}
        </HelperText>
      )}
    </InputContainer>
  );
};

export default Input;