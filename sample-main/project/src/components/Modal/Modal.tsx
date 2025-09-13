import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
} from './Modal.styled';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEscapeKey = true,
  showCloseButton = true,
  footer,
  className,
  'data-testid': dataTestId,
}) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (closeOnEscapeKey && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscapeKey, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <Backdrop onClick={handleBackdropClick} data-testid={dataTestId}>
      <ModalContainer $size={size} className={className}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {showCloseButton && (
              <CloseButton
                onClick={onClose}
                aria-label="Close modal"
                data-testid="modal-close-button"
              >
                <X size={18} />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        
        <ModalBody>{children}</ModalBody>
        
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Backdrop>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;