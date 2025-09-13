import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { InputProps } from './Input.types';

const getStateStyles = (state: InputProps['state']) => {
  switch (state) {
    case 'success':
      return css`
        border-color: ${theme.colors.success[500]};
        
        &:focus {
          border-color: ${theme.colors.success[600]};
          box-shadow: 0 0 0 3px ${theme.colors.success[50]};
        }
      `;
    case 'warning':
      return css`
        border-color: ${theme.colors.warning[500]};
        
        &:focus {
          border-color: ${theme.colors.warning[600]};
          box-shadow: 0 0 0 3px ${theme.colors.warning[50]};
        }
      `;
    case 'error':
      return css`
        border-color: ${theme.colors.error[500]};
        
        &:focus {
          border-color: ${theme.colors.error[600]};
          box-shadow: 0 0 0 3px ${theme.colors.error[50]};
        }
      `;
    default:
      return css`
        border-color: ${theme.colors.gray[300]};
        
        &:focus {
          border-color: ${theme.colors.primary[500]};
          box-shadow: 0 0 0 3px ${theme.colors.primary[50]};
        }
      `;
  }
};

const getSizeStyles = (size: InputProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        height: 32px;
        font-size: ${theme.typography.fontSize.sm};
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
      `;
    case 'md':
      return css`
        height: 40px;
        font-size: ${theme.typography.fontSize.base};
        padding: ${theme.spacing.sm} ${theme.spacing.md};
      `;
    case 'lg':
      return css`
        height: 48px;
        font-size: ${theme.typography.fontSize.lg};
        padding: ${theme.spacing.md} ${theme.spacing.lg};
      `;
    default:
      return '';
  }
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;
`;

export const Label = styled.label`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: #000000;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<{
  size?: InputProps['size'];
  state?: InputProps['state'];
}>`
  width: 100%;
  font-family: ${theme.typography.fontFamily.sans};
  background-color: rgba(255, 255, 255, 0.95);
  border: 2px solid;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  outline: none;
  color: #000000;
  
  ${(props) => getSizeStyles(props.size)}
  ${(props) => getStateStyles(props.state)}
  
  &::placeholder {
    color: #333333;
  }
  
  &:disabled {
    background-color: ${theme.colors.gray[100]};
    color: #000000;
    cursor: not-allowed;
    opacity: 0.8;
  }
  
  &:hover:not(:disabled) {
    border-color: ${theme.colors.gray[400]};
  }
`;

export const IconWrapper = styled.div<{ $position: 'left' | 'right'; $size?: InputProps['size'] }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray[400]};
  pointer-events: none;
  
  ${(props) => props.$position === 'left' ? css`
    left: ${theme.spacing.sm};
  ` : css`
    right: ${theme.spacing.sm};
  `}
  
  ${(props) => props.$size === 'sm' && css`
    font-size: 14px;
  `}
  
  ${(props) => props.$size === 'lg' && css`
    font-size: 20px;
  `}
`;

export const HelperText = styled.p<{ $state?: InputProps['state'] }>`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.xs};
  margin: 0;
  
  ${(props) => {
    switch (props.$state) {
      case 'success':
        return css`color: ${theme.colors.success[600]};`;
      case 'warning':
        return css`color: ${theme.colors.warning[600]};`;
      case 'error':
        return css`color: ${theme.colors.error[600]};`;
      default:
        return css`color: #000000;`;
    }
  }}
`;