import React from "react";
interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

const Row = ({ label, value, className }: Partial<RowProps>) => {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
};

export default Row;
