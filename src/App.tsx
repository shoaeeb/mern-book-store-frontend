import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layouts/layout";
import AuthCallBack from "./pages/AuthCallBack";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile";
import SellBook from "./pages/SellBook";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />

      <Route path="/auth-callback" element={<AuthCallBack />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/sell-book"
          element={
            <Layout>
              <SellBook />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
