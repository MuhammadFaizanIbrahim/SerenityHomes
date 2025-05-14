import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'light' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-all duration-300 font-medium';
  
  const variantStyles = {
    primary: 'bg-amber-800 text-white hover:bg-amber-900',
    secondary: 'bg-stone-200 text-stone-800 hover:bg-stone-300',
    outline: 'border border-amber-800 text-amber-800 hover:bg-amber-50',
    light: 'bg-white text-stone-800 hover:bg-white/90',
    'outline-light': 'border-2 border-white text-white hover:bg-white/10'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;