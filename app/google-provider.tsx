'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = '420764803781-rcfakmg8qq7kvh428slmtkdoiiqqgsls.apps.googleusercontent.com';

export default function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
