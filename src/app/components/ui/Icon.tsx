import React from 'react';

interface IconProps {
  name: string; // Material Icon names or any custom SVG
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className }) => {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return <i className={`${sizeStyles[size]} material-icons ${className}`}>{name}</i>;
};

export default Icon;
