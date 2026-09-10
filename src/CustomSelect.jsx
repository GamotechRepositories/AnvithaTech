import { useState, useRef, useEffect } from 'react'

export function CustomSelect({
  id,
  label,
  icon,
  value,
  options = [],
  onChange,
  placeholder = 'Select an option',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option)
    }
    setIsOpen(false)
  }

  return (
    <div className="custom-select-wrap" ref={selectRef} id={id}>
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label || placeholder}
      >
        {icon && <i className={`${icon} custom-select-leading-icon`} aria-hidden="true" />}
        <span className="custom-select-value">{value || placeholder}</span>
        <span className="custom-select-badge" aria-hidden="true">
          <i
            className={`fas fa-chevron-down ${isOpen ? 'rotate-open' : ''}`}
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          <ul className="custom-select-list">
            {options.map((opt) => {
              const isSelected = opt === value
              return (
                <li
                  key={opt}
                  className={`custom-select-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(opt)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span className="custom-select-item-text">{opt}</span>
                  {isSelected && (
                    <i className="fas fa-check custom-select-check" aria-hidden="true" />
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
