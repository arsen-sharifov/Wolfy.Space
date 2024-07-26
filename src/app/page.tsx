'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: any) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleCredentials = () => {
    if (login === '123' && password === '123') {
      router.push('/Home');
    } else {
      alert('wrong pass');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-color font-abril">
      <div className="flex h-[90%] w-[90%] items-center justify-around">
        <div className="flex-1">
          <h2 className="text-2xl text-text-color">{t('welcome')}</h2>
          <br />
          <h2 className="text-2xl text-text-color">{t('description')}</h2>
          <div className="mt-10 flex min-h-fit w-[40vw] flex-col items-center rounded-[10px] bg-primary-color p-5 shadow-md">
            <div className="flex w-[50%] justify-between">
              <div className="flex flex-col items-center">
                <span className="cursor-pointer p-2.5 text-2xl text-text-color transition-colors duration-300">
                  {t('SignIn')}
                </span>
                <div className="bg-text-color h-[8px] w-[70px] self-center rounded-md transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <span className="cursor-pointer p-2.5 text-2xl text-text-color transition-colors duration-300">
                  {t('SignUp')}
                </span>
                <div className="bg-text-color h-[8px] w-[70px] self-center rounded-md transition-colors duration-300" />
              </div>
            </div>
            <div className="mt-8 flex w-[80%] flex-col items-center">
              <input
                type="text"
                placeholder="Login"
                value={login}
                onChange={handleLogin}
                className="my-2.5 h-[45px] w-[100%] rounded-md border-none bg-card-bg-color p-2.5 text-lg text-text-color"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                className="my-2.5 h-[45px] w-[100%] rounded-md border-none bg-card-bg-color p-2.5 text-lg text-text-color"
              />
              <button
                onClick={handleCredentials}
                className="mt-5 w-[100px] cursor-pointer self-end rounded-md border-none bg-primary-color p-2.5 text-lg text-white transition-colors duration-300 hover:bg-secondary-color"
              >
                Go!
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src="/assets/general/images/logo.png" alt="Logo" width={544} height={674} />
        </div>
      </div>
    </div>
  );
}
