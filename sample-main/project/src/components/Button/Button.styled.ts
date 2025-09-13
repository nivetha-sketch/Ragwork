import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { ButtonProps } from './Button.types';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary[500]};
        color: white;
        border: 2px solid ${theme.colors.primary[500]};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary[600]};
          border-color: ${theme.colors.primary[600]};
          transform: translateY(-1px);
        }
        
        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.colors.gray[100]};
        color: ${theme.colors.gray[700]};
        border: 2px solid ${theme.colors.gray[200]};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.gray[200]};
          border-color: ${theme.colors.gray[300]};
          transform: translateY(-1px);
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary[600]};
        border: 2px solid ${theme.colors.primary[300]};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary[50]};
          border-color: ${theme.colors.primary[400]};
          transform: translateY(-1px);
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: #000000;
        border: 2px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.gray[100]};
          color: #000000;
          transform: translateY(-1px);
        }
      `;
    case 'danger':
      return css`
        background-color: ${theme.colors.error[500]};
        color: white;
        border: 2px solid ${theme.colors.error[500]};
        
        &:hover:not(:disabled) {
          background-color: ${theme.colors.error[600]};
          border-color: ${theme.colors.error[600]};
          transform: translateY(-1px);
        }
      `;
    default:
      return '';
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
        font-size: ${theme.typography.fontSize.sm};
        height: 32px;
      `;
    case 'md':
      return css`
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: ${theme.typography.fontSize.base};
        height: 40px;
      `;
    case 'lg':
      return css`
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: ${theme.typography.fontSize.lg};
        height: 48px;
      `;
    default:
      return '';
  }
};

export const StyledButton = styled.button<{
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  font-family: ${theme.typography.fontFamily.sans};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  white-space: nowrap;
  box-shadow: ${theme.shadows.sm};
  
  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getSizeStyles(props.size)}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;