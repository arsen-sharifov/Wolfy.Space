import { signIn } from 'next-auth/react';

export async function doSocialLogin(provider) {
  await signIn(provider);
}

export const handleSubmit = (provider) => (event) => {
  event.preventDefault();
  doSocialLogin(provider);
};
