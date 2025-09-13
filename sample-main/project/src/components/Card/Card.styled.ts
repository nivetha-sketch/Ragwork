import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { CardProps } from './Card.types';

const getVariantStyles = (variant: CardProps['variant'], hoverable?: boolean, clickable?: boolean) => {
  const hoverStyles = (hoverable || clickable) ? css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }
  ` : '';

  switch (variant) {
    case 'outlined':
      return css`
        background-color: white;
        border: 2px solid ${theme.colors.gray[200]};
        box-shadow: none;
        
        ${hoverStyles}
      `;
    case 'elevated':
      return css`
        background-color: white;
        border: none;
        box-shadow: ${theme.shadows.lg};
        
        ${hoverStyles}
      `;
    case 'flat':
      return css`
        background-color: ${theme.colors.gray[50]};
        border: none;
        box-shadow: none;
        
        ${hoverStyles}
      `;
    default:
      return css`
        background-color: white;
        border: 1px solid ${theme.colors.gray[200]};
        box-shadow: ${theme.shadows.sm};
        
        ${hoverStyles}
      `;
  }
};

const getPaddingStyles = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'none':
      return css`padding: 0;`;
    case 'sm':
      return css`padding: ${theme.spacing.sm};`;
    case 'md':
      return css`padding: ${theme.spacing.md};`;
    case 'lg':
      return css`padding: ${theme.spacing.lg};`;
    default:
      return css`padding: ${theme.spacing.lg};`;
  }
};

export const StyledCard = styled.div<{
  variant?: CardProps['variant'];
  hoverable?: CardProps['hoverable'];
  clickable?: CardProps['clickable'];
}>`
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  
  ${(props) => getVariantStyles(props.variant, props.hoverable, props.clickable)}
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
  margin-bottom: ${theme.spacing.md};
`;

export const CardContent = styled.div<{ $padding?: CardProps['padding'] }>`
  ${(props) => getPaddingStyles(props.$padding)}
`;

export const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

export const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: #000000;
  margin: 0 0 ${theme.spacing.xs} 0;
  line-height: 1.4;
`;

export const CardSubtitle = styled.p`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.sm};
  color: #000000;
  margin: 0;
  line-height: 1.5;
`;

export const CardBody = styled.div`
  font-family: ${theme.typography.fontFamily.sans};
  color: #000000;
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  margin-top: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.gray[100]};
`;