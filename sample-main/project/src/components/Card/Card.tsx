import React from 'react';
import {
  StyledCard,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from './Card.styled';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  imageAlt,
  footer,
  variant = 'default',
  padding = 'lg',
  hoverable = false,
  clickable = false,
  onClick,
  className,
  'data-testid': dataTestId,
  ...props
}) => {
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (clickable && onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <StyledCard
      variant={variant}
      hoverable={hoverable}
      clickable={clickable}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      className={className}
      data-testid={dataTestId}
      {...props}
    >
      {image && <CardImage src={image} alt={imageAlt || ''} />}
      
      <CardContent $padding={padding}>
        {(title || subtitle) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardHeader>
        )}
        
        <CardBody>{children}</CardBody>
        
        {footer && <CardFooter>{footer}</CardFooter>}
      </CardContent>
    </StyledCard>
  );
};

export default Card;