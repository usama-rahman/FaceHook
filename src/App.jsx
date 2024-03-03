import { Route, Routes } from 'react-router-dom';

import PrivateRoutes from './routes/PrivateRoutes';

import ProfilePage from './page/ProfilePage';
import NotFoundPage from './page/NotFoundPage';
import LoginPage from './page/LoginPage';
import RegistrationPage from './page/RegistrationPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
