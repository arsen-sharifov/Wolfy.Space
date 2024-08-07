'use client';

import { useState } from 'react';
import Image from 'next/image';
import SignInModal from '../components/modals/auth-modal';
import wolfImage from '../../public/assets/general/images/welcome.png';
import withAuth from '../components/with-auth'; // змініть шлях до HOC

function Welcome() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <div className="flex h-full w-full">
        <div className="flex flex-1 flex-col justify-center p-10">
          {showModal ? (
            <SignInModal
              isVisible={showModal}
              onClose={handleCloseModal}
              isSignUp={isSignUp}
              toggleForm={toggleForm}
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="mb-8 text-4xl font-bold text-gray-900">Welcome to Wolfy.space!</h1>
                <p className="mb-6 max-w-[520px] text-lg text-gray-700">
                  Customize your profile, share posts, play games, and connect with friends in the
                  ultimate social network experience.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="mt-5 w-[128px] rounded bg-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-400"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative h-[100vh] flex-1">
          <Image src={wolfImage} alt="Wolf" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(Welcome, true); // обгорніть початкову сторінку HOC та додайте прапорець перенаправлення на Home
