// components/ui/button.jsx
import React from 'react';
import { cn } from '@/lib/utils';

export function Button({ variant = 'default', size = 'default', className, children, ...props }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    default: 'bg-emerald-600 text-white hover:bg-emerald-700',
    outline: 'border border-gray-200 dark:border-gray-700',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
