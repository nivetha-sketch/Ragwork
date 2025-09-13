import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles/theme';
import { ModalProps } from './Modal.types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const getSizeStyles = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        width: 90%;
        max-width: 400px;
      `;
    case 'md':
      return css`
        width: 90%;
        max-width: 500px;
      `;
    case 'lg':
      return css`
        width: 90%;
        max-width: 700px;
      `;
    case 'xl':
      return css`
        width: 90%;
        max-width: 900px;
      `;
    default:
      return '';
  }
};

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div<{ $size?: ModalProps['size'] }>`
  background-color: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.2s ease-out;
  
  ${(props) => getSizeStyles(props.$size)}
  
  @media (max-width: 640px) {
    width: 95%;
    max-height: 95vh;
    margin: 0;
  }
`;

export const ModalHeader = styled.div`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: #000000;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.gray[400]};
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[600]};
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const ModalBody = styled.div`
  padding: ${theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
  font-family: ${theme.typography.fontFamily.sans};
  color: #000000;
  line-height: 1.6;
`;

export const ModalFooter = styled.div`
  padding: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.gray[200]};
  display: flex;
  gap: ${theme.spacing.sm};
  justify-content: flex-end;
`;