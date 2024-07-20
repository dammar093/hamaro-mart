import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className='top-0 sticky z-20'>
        <Header />
      </div>
      <ScrollToTop />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
      <div className='bottom-0 fixed z-20 w-full'>
        <BottomNavbar />
      </div>

    </>
  );
};

export default AuthLayout;
