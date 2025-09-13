export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnBackdropClick?: boolean;
  closeOnEscapeKey?: boolean;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}