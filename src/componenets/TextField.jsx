import React, { useState } from 'react';

const TextField = ({
  label,
  id,
  type = "text",
  errors = {},
  register,
  required = false,
  message,
  className = "",
  min,
  value,
  placeholder,
  disabled = false,
  icon,
  helperText,
  variant = "default", // default, filled, outlined
  size = "md", // sm, md, lg
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const hasError = errors[id]?.message;
  
  // Size variants
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-5 py-4 text-lg"
  };
  
  // Variant styles
  const variantClasses = {
    default: `
      border-2 bg-white/5 backdrop-blur-sm
      ${hasError 
        ? 'border-red-400 focus:border-red-500' 
        : isFocused 
          ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
          : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'
      }
    `,
    filled: `
      border-0 border-b-2 bg-gray-100 dark:bg-gray-800 rounded-t-lg
      ${hasError 
        ? 'border-b-red-400 focus:border-b-red-500' 
        : isFocused 
          ? 'border-b-blue-500 bg-blue-50 dark:bg-blue-900/20' 
          : 'border-b-gray-300 hover:border-b-gray-400 dark:border-b-gray-600'
      }
    `,
    outlined: `
      border-2 bg-transparent
      ${hasError 
        ? 'border-red-400 focus:border-red-500' 
        : isFocused 
          ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
          : 'border-gray-300 hover:border-gray-400 dark:border-gray-600'
      }
    `
  };

  return (
    <div className={`relative flex flex-col gap-2 ${className}`}>
      {/* Label */}
      <label
        htmlFor={id}
        className={`
          font-medium text-sm transition-all duration-200 select-none
          ${hasError 
            ? 'text-red-600 dark:text-red-400' 
            : isFocused 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-700 dark:text-gray-300'
          }
          ${required ? "after:content-['*'] after:text-red-500 after:ml-1" : ""}
        `}
      >
        {label}
      </label>

      {/* Input Container */}
      <div className="relative group">
        {/* Leading Icon */}
        {icon && (
          <div className={`
            absolute left-3 top-1/2 transform -translate-y-1/2 z-10
            ${hasError ? 'text-red-400' : isFocused ? 'text-blue-500' : 'text-gray-400'}
            transition-colors duration-200
          `}>
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-xl outline-none transition-all duration-300 ease-in-out
            text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
            disabled:opacity-50 disabled:cursor-not-allowed
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${icon ? 'pl-10' : ''}
            ${type === "password" ? 'pr-10' : ''}
            focus:outline-none focus:ring-0
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...register(id, {
            required: { value: required, message },
            minLength: min
              ? { value: min, message: `Minimum ${min} characters required` }
              : null,
            pattern:
              type === "email"
                ? {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  }
                : type === "url"
                ? {
                    value: /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                    message: "Please enter a valid URL",
                  }
                : null,
          })}
        />

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`
              absolute right-3 top-1/2 transform -translate-y-1/2
              ${hasError ? 'text-red-400' : 'text-gray-400 hover:text-gray-600'}
              transition-colors duration-200 focus:outline-none
            `}
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}

        {/* Focus Ring Effect */}
        <div className={`
          absolute inset-0 rounded-xl pointer-events-none transition-all duration-300
          ${isFocused && !hasError ? 'ring-2 ring-blue-500/20 ring-offset-2 ring-offset-transparent' : ''}
        `} />
      </div>

      {/* Helper Text or Error Message */}
      <div className="min-h-[20px] flex items-start">
        {hasError ? (
          <div className="flex items-center gap-1 animate-fadeIn">
            <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              {hasError}
            </p>
          </div>
        ) : helperText ? (
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {helperText}
          </p>
        ) : null}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TextField;