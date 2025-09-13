import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../styles/theme';

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-40px, -20px) rotate(180deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -40px) rotate(90deg); }
  75% { transform: translate(-30px, 30px) rotate(270deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  z-index: -1;
  
  /* Add a subtle overlay to ensure text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(0.5px);
  }
`;

const FloatingShape = styled.div<{
  $size: number;
  $x: number;
  $y: number;
  $animation: any;
  $delay: number;
  $color: string;
  $opacity: number;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  background-color: ${(props) => props.$color};
  border-radius: 50%;
  opacity: ${(props) => props.$opacity};
  animation: ${(props) => css`${props.$animation} 20s ease-in-out infinite`};
  animation-delay: ${(props) => props.$delay}s;
`;

const GeometricShape = styled.div<{
  $size: number;
  $x: number;
  $y: number;
  $rotation: number;
  $color: string;
  $opacity: number;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  left: ${(props) => props.$x}%;
  top: ${(props) => props.$y}%;
  background: linear-gradient(45deg, ${(props) => props.$color}, transparent);
  transform: rotate(${(props) => props.$rotation}deg);
  opacity: ${(props) => props.$opacity};
  border-radius: 4px;
  animation: ${pulse} 8s ease-in-out infinite;
`;

export const AnimatedBackground: React.FC = () => {
  const shapes = [
    { size: 80, x: 10, y: 20, animation: float1, delay: 0, color: 'rgba(255, 255, 255, 0.1)', opacity: 0.15 },
    { size: 60, x: 80, y: 10, animation: float2, delay: 2, color: 'rgba(255, 255, 255, 0.08)', opacity: 0.12 },
    { size: 70, x: 70, y: 70, animation: float3, delay: 4, color: 'rgba(255, 255, 255, 0.06)', opacity: 0.1 },
    { size: 50, x: 20, y: 80, animation: float2, delay: 6, color: 'rgba(255, 255, 255, 0.1)', opacity: 0.15 },
    { size: 65, x: 90, y: 50, animation: float1, delay: 8, color: 'rgba(255, 255, 255, 0.05)', opacity: 0.08 },
    { size: 55, x: 5, y: 50, animation: float3, delay: 10, color: 'rgba(255, 255, 255, 0.1)', opacity: 0.12 },
  ];

  const geometricShapes = [
    { size: 30, x: 15, y: 30, rotation: 45, color: 'rgba(255, 255, 255, 0.08)', opacity: 0.1 },
    { size: 25, x: 85, y: 25, rotation: 135, color: 'rgba(255, 255, 255, 0.06)', opacity: 0.08 },
    { size: 28, x: 75, y: 85, rotation: 225, color: 'rgba(255, 255, 255, 0.1)', opacity: 0.12 },
    { size: 20, x: 25, y: 65, rotation: 315, color: 'rgba(255, 255, 255, 0.05)', opacity: 0.06 },
  ];

  return (
    <BackgroundContainer>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={`circle-${index}`}
          $size={shape.size}
          $x={shape.x}
          $y={shape.y}
          $animation={shape.animation}
          $delay={shape.delay}
          $color={shape.color}
          $opacity={shape.opacity}
        />
      ))}
      
      {geometricShapes.map((shape, index) => (
        <GeometricShape
          key={`geo-${index}`}
          $size={shape.size}
          $x={shape.x}
          $y={shape.y}
          $rotation={shape.rotation}
          $color={shape.color}
          $opacity={shape.opacity}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;