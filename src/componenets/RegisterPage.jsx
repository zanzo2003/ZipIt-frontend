import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import TextField from './TextField'; // Assuming TextField is in the same directory or adjust the import path

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const {username, email, password} = data;
    const roles = new Set(['user']);
    const registrationData = {username, email, password, roles};
    console.log('Registration Data:', registrationData);
    // Handle form submission (e.g., API call)
  };

  // Animation variants for the form container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements (title, fields, buttons)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-custom"
        variants={childVariants}
      >
        <motion.div variants={childVariants}>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 animate-slide-right">
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in">
            Join us today! Fill in the details below to register.
          </p>
        </motion.div>
        <motion.div className="mt-8 space-y-6" variants={childVariants}>
          <div className="space-y-6">
            {[
              {
                label: 'Username',
                id: 'username',
                type: 'text',
                placeholder: 'Enter your username',
                required: true,
                message: 'Username is required',
                min: 3,
                helperText: 'Choose a unique username',
                delay: 0,
              },
              {
                label: 'Email',
                id: 'email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
                message: 'Email is required',
                helperText: "We'll never share your email",
                delay: 150,
              },
              {
                label: 'Password',
                id: 'password',
                type: 'password',
                placeholder: 'Enter your password',
                required: true,
                message: 'Password is required',
                min: 6,
                helperText: 'Use at least 6 characters',
                delay: 300,
              },
            ].map((field) => (
              <motion.div
                key={field.id}
                className="animate-slide-up"
                style={{ animationDelay: `${field.delay}ms` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: field.delay / 1000 }}
              >
                <TextField
                  label={field.label}
                  id={field.id}
                  type={field.type}
                  register={register}
                  required={field.required}
                  message={field.message}
                  errors={errors}
                  placeholder={field.placeholder}
                  variant="outlined"
                  size="md"
                  className="w-full"
                  min={field.min}
                  helperText={field.helperText}
                />
              </motion.div>
            ))}
          </div>
          <motion.div variants={childVariants}>
            <motion.button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-btnColor hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Register
            </motion.button>
          </motion.div>
          <motion.p
            className="text-center text-sm text-gray-600 dark:text-gray-400"
            variants={childVariants}
          >
            Already have an account?{' '}
            <a href="#" className="font-medium text-linkColor hover:text-blue-600">
              Sign in
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;