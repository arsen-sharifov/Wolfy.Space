import React, { useState, useRef, useEffect, FC } from 'react';

interface DropdownProps {
  label: string;
  items: { name: string; value: string; color?: string }[];
  onSelect: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${
          dropdownOpen ? 'bg-bg-color text-text-color' : 'bg-bg-color text-text-color'
        }`}
        onClick={toggleDropdown}
      >
        {label}
        <img
          src="/assets/icons/arrow-down.svg"
          alt="Arrow"
          className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`${
          dropdownOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        } absolute left-0 z-50 mt-2 w-48 origin-top-left rounded-lg bg-secondary-color shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-150 ease-out`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-2">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onSelect(item.value);
                setDropdownOpen(false);
              }}
              className="block flex w-full items-center px-4 py-2 text-left text-sm text-text-color transition-colors duration-200 hover:bg-primary-color hover:text-text-color"
              role="menuitem"
              tabIndex={-1}
            >
              {item.color && (
                <span
                  className="mr-2 inline-block h-4 w-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
              )}
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
