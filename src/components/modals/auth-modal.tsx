import React from 'react';

export default function SignInModal({ isVisible, onClose, isSignUp, toggleForm }: any) {
  if (!isVisible) return null;

  return (
    <div className="relative mx-auto w-full max-w-lg rounded-lg bg-white p-8">
      <button
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className="mb-4 text-2xl font-bold">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form className="space-y-4">
        {isSignUp && (
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="John"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Surname</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Doe"
              />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
        {isSignUp && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
        )}
        {!isSignUp && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
        )}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={toggleForm}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-600">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </span>
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M21.35 11.1h-9.1v2.5h5.4a5.5 5.5 0 0 1-5.4 4.5c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.5 0 2.8.6 3.8 1.5l1.7-1.7a8 8 0 1 0-5.5 13.5c4.4 0 8-3.6 8-8 0-.5-.1-1-.2-1.4z"
                fill="#4285f4"
              />
            </svg>
            <span className="ml-2">{isSignUp ? 'Sign up with Google' : 'Sign in with Google'}</span>
          </button>
          <button
            type="button"
            className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">
              {isSignUp ? 'Sign up with Facebook' : 'Sign in with Facebook'}
            </span>
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22 12c0-5.5-4.5-10-10-10s-10 4.5-10 10c0 4.9 3.5 8.9 8 9.8v-6.8h-2.4v-3h2.4v-2.3c0-2.4 1.5-3.7 3.6-3.7 1 0 1.8.1 2 .1v2.3h-1.4c-1.2 0-1.5.6-1.5 1.5v1.8h3l-.5 3h-2.5v6.8c4.5-.9 8-4.9 8-9.8z"
                fill="#1877f2"
              />
            </svg>
            <span className="ml-2">
              {isSignUp ? 'Sign up with Facebook' : 'Sign in with Facebook'}
            </span>
          </button>
          <button
            type="button"
            className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <span className="sr-only">
              {isSignUp ? 'Sign up with Apple' : 'Sign in with Apple'}
            </span>
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M16.8 13.2c-.2-.1-.3-.3-.3-.4-.3-.5-.2-1.3.1-1.8.3-.6.7-1.3 1-1.7-.5-.1-1.1-.2-1.6-.2-1.4 0-2.6.8-3.2.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-.4.7-.7 1.4-.7 2.2 0 .7.2 1.5.4 1.9.2.4.5 1 1 1.4.5.3.9.7 1.5.7.6 0 1.2-.2 1.7-.5.5-.3 1.1-.5 1.7-.5.6 0 1.1.2 1.6.4.3.2.6.3 1.1.3.5 0 1.1-.3 1.6-.7.5-.5.9-1.1 1.1-1.8-.6-.2-1.2-.5-1.6-.9-.4-.4-.7-.8-.8-1.3zm-3.5-6.5c.4-.5.7-1.1.7-1.7 0-.1 0-.2 0-.3-.5 0-1.2.3-1.5.7-.4.4-.7 1-.7 1.6 0 .1 0 .2.1.3.5 0 1.2-.4 1.4-.6z"
                fill="#000000"
              />
            </svg>
            <span className="ml-2">{isSignUp ? 'Sign up with Apple' : 'Sign in with Apple'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
