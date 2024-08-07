/* eslint-disable react/display-name */
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any, redirectToHome: boolean = false) => {
  return (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const mode = process.env.NEXT_PUBLIC_MODE === 'SKIP';

    useEffect(() => {
      if (!mode && status === 'unauthenticated' && session === null && !redirectToHome) {
        router.push('/');
      } else if (mode || (status === 'authenticated' && redirectToHome)) {
        router.push('/Home');
      }
    }, [status, session, router, mode, redirectToHome]);

    if (
      mode &&
      (status === 'loading' ||
        (status === 'unauthenticated' && session === null && !redirectToHome))
    ) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
