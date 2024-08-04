import React from 'react';
import { handleSubmit } from './utils';
import { buttons } from './constants';

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
        <div className="mt-4 grid grid-cols-2 gap-4">
          {buttons.map((button) => (
            <button
              key={button.provider}
              onClick={handleSubmit(button.provider)}
              className={`flex h-11 w-full items-center justify-center rounded-lg ${button.color} ${button.textColor} ${button.hoverColor}`}
            >
              <img
                src={button.icon}
                alt={`${button.name} logo`}
                style={{ width: button.size[0], height: button.size[1] }}
                className="mr-3"
              />
              <span className="text-[14px] font-medium">{button.label}</span>
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
