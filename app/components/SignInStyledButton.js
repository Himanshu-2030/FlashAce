// components/StyledSignInButton.tsx
'use client';  // Ensure this component is rendered on the client side

import { styled } from '@mui/material/styles';
import { SignInButton } from '@clerk/nextjs';
import Button from '@mui/material/Button';

const StyledSignInButton = styled(({ className, ...props }) => (
  <SignInButton className={className} {...props} />
))(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  borderRadius: '4px',
  padding: '8px 16px',
  textTransform: 'none',
  fontSize: '16px',
}));

export default StyledSignInButton;
