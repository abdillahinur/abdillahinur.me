// components/ui/tabs.jsx
import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'TabsList') {
          return React.cloneElement(child, { value, setValue });
        }
        return null;
      })}
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'TabsContent') {
          return React.cloneElement(child, { value });
        }
        return null;
      })}
    </div>
  );
}

export function TabsList({ children, value, setValue }) {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}
TabsList.displayName = 'TabsList';

export function TabsTrigger({ children, value: tabValue, value, setValue }) {
  const isActive = value === tabValue;
  return (
    <button
      className={`px-4 py-2 -mb-px font-medium text-sm ${
        isActive
          ? 'border-b-2 border-emerald-600 text-emerald-600'
          : 'border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-600'
      }`}
      onClick={() => setValue(tabValue)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value: tabValue, value }) {
  if (value !== tabValue) return null;
  return <div className="py-4">{children}</div>;
}
TabsContent.displayName = 'TabsContent';
