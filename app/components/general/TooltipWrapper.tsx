"use client"

import React, { useState, ReactNode } from 'react';

type TooltipWrapperProps = {
  tooltipText: string;
  children: ReactNode;
};

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ tooltipText, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg z-10">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default TooltipWrapper;
