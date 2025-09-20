import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Toast = ({ messageHead, messageBody, type, onClose }) => {
  // Automatically close the toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Animation variants for the toast
  const toastVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  // Styling based on type (success or error)
  const typeStyles = {
    success: {
      bg: 'bg-green-500',
      border: 'border-green-600',
      text: 'text-white',
      hover: 'hover:bg-green-600',
    },
    error: {
      bg: 'bg-red-500',
      border: 'border-red-600',
      text: 'text-white',
      hover: 'hover:bg-red-600',
    },
  };

  const { bg, border, text, hover } = typeStyles[type] || typeStyles.success;

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed bottom-4 right-4 max-w-sm w-full ${bg} ${border} ${text} rounded-xl shadow-custom p-4  border-l-4`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={toastVariants}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold ">{messageHead}</h3>
            <p className="text-sm mt-1">{messageBody}</p>
          </div>
          <button
            onClick={onClose}
            className={`p-1 rounded-full ${hover} focus:outline-none transition-colors duration-200`}
            aria-label="Close toast"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;