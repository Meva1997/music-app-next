import React from "react";

type Option<T extends string> = {
  label: string;
  value: T;
};

type ToggleButtonGroupProps<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export default function ToggleButtonGroup<T extends string>({
  options,
  value,
  onChange,
  className = "",
}: ToggleButtonGroupProps<T>) {
  return (
    <div className={`flex gap-4 justify-center mb-6 font-bold ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-2 rounded cursor-pointer ${
            value === option.value
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-orange-800"
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
