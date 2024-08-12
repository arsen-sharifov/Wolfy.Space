const GoogleLogo = '/assets/icons/auth-modal/google-logo.svg';
const FacebookLogo = '/assets/icons/auth-modal/facebook-logo.svg';
const RedditLogo = '/assets/icons/auth-modal/reddit-logo.svg';
const XLogo = '/assets/icons/auth-modal/x-logo-white.svg';

export const buttons = [
  {
    name: 'Google',
    provider: 'google',
    icon: GoogleLogo,
    color: 'bg-white border border-gray-300',
    textColor: 'text-gray-700',
    hoverColor: 'hover:bg-gray-50',
    label: 'Continue with Google',
    size: ['18px', '18px'],
  },
  {
    name: 'Facebook',
    provider: 'facebook',
    icon: FacebookLogo,
    color: 'bg-blue-600 border border-blue-600',
    textColor: 'text-white',
    hoverColor: 'hover:bg-blue-700',
    label: 'Continue with Facebook',
    size: ['18px', '18px'],
  },
  {
    name: 'Reddit',
    provider: 'reddit',
    icon: RedditLogo,
    color: 'bg-orange-600 border border-orange-600',
    textColor: 'text-white',
    hoverColor: 'hover:bg-orange-700',
    label: 'Continue with Reddit',
    size: ['26px', '26px'],
  },
  {
    name: 'Twitter',
    provider: 'twitter',
    icon: XLogo,
    color: 'bg-black border border-black',
    textColor: 'text-white',
    hoverColor: 'hover:bg-gray-800',
    label: 'Continue with Twitter',
    size: ['16px', '16px'],
  },
];
