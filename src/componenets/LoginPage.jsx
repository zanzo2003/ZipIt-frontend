import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import Toast from './Toast';
import TextField from './TextField';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [toast, setToast] = useState({
    show: false,
    messageHead: '',
    messageBody: '',
    type: 'success',
  });

  const onSubmit = async (data) => {
    const { username, password } = data;
    const loginData = { username, password };
    console.log('Login Data:', loginData);

    try {
      const response = await axios.post(`${baseUrl}/api/auth/public/login`, loginData);
      console.log('Login Success:', response);
      setToast({
        show: true,
        messageHead: 'Welcome!',
        messageBody: 'You have logged in successfully.',
        type: 'success',
      });

      // store in local storage
      localStorage.setItem('token', response.data.token);

      //TODO: save in state for other components to use


      // navigate to home page
      navigate("/")
      
    } catch (error) {
      console.log('Login Error:', error);
      setToast({
        show: true,
        messageHead: 'Error',
        messageBody: error.response?.data?.message || 'Invalid username or password.',
        type: 'error',
      });
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };

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
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-roboto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-custom"
        variants={childVariants}
      >
        <motion.div variants={childVariants}>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 font-montserrat animate-slide-right">
            Sign In to Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in">
            Please enter your credentials to continue.
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
                delay: 0,
              },
              {
                label: 'Password',
                id: 'password',
                type: 'password',
                placeholder: 'Enter your password',
                required: true,
                message: 'Password is required',
                delay: 150,
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
              Login
            </motion.button>
          </motion.div>

          <motion.p
            className="text-center text-sm text-gray-600 dark:text-gray-400"
            variants={childVariants}
          >
            Don’t have an account?{' '}
            <a href="/register" className="font-medium text-linkColor hover:text-blue-600">
              Register
            </a>
          </motion.p>
        </motion.div>
      </motion.div>

      {toast.show && (
        <Toast
          messageHead={toast.messageHead}
          messageBody={toast.messageBody}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </motion.div>
  );
};

export default LoginPage;
