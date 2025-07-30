// LoginPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import MainPage from './MainPage';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate('/about');
  };
  const handleNavigateToMain = () => {
    navigate('/main');
  };

  return (

    <React.StrictMode>
      <Authenticator>
        <MainPage />
      </Authenticator>
    </React.StrictMode>

  );
};

export default LoginPage;