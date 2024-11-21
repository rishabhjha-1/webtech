import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', className, children, ...props }) => {
  const baseStyles = `rounded font-bold focus:outline-none focus:ring`;
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    light: 'bg-white text-blue-600 hover:bg-gray-200',
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
