import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layouts/layout";
import AuthCallBack from "./pages/AuthCallBack";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile";
import SellBook from "./pages/SellBook";
import MyBooks from "./pages/MyBooks";
import EditBook from "./pages/EditBook";
import Search from "./pages/Search";
import BookDetailPage from "./pages/BookDetailPage";
import CheckOut from "./pages/CheckOut";
import OrderStatus from "./pages/OrderStatus";

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
          path="/order-status"
          element={
            <Layout>
              <OrderStatus />
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
        <Route
          path="/my-books"
          element={
            <Layout>
              <MyBooks />
            </Layout>
          }
        />
        <Route
          path="/edit-book/:bookId"
          element={
            <Layout>
              <EditBook />
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <CheckOut />
            </Layout>
          }
        />
      </Route>
      <Route
        path="/search/:query"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/detail/:bookId"
        element={
          <Layout>
            <BookDetailPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
