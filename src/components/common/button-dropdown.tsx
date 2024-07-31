import React, { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  value: string;
  name: string;
  color?: string;
}

interface ButtonDropdownProps {
  label: string;
  items: DropdownItem[];
  onSelect: (value: string) => void;
  className?: string;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({ label, items, onSelect, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`border-primary-border-color inline-flex w-full justify-center rounded-md border bg-secondary-color px-4 py-2 text-sm font-medium text-text-color shadow-sm ${className}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div
          className="ring-secondary-color absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-primary-color shadow-lg ring-1 ring-opacity-5"
          role="menu"
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onSelect(item.value);
                  setDropdownOpen(false);
                }}
                className="hover:bg-primary-hover-color flex w-full items-center px-4 py-2 text-sm text-text-color"
                role="menuitem"
              >
                {item.color && (
                  <span
                    className="mr-2 block h-4 w-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                )}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonDropdown;
