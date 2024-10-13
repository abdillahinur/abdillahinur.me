import React from 'react';

export function Card({ className, children, ...props }) {
  return (
    <div className={`bg-[#151B2D] shadow rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={`text-sm text-gray-400 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={`p-4 text-white ${className}`} {...props}>
      {children}
    </div>
  );
}