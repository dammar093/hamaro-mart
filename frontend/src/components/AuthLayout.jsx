import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Container from './Container';
const AuthLayout = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ScrollToTop />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>

    </>
  );
};

export default AuthLayout;
