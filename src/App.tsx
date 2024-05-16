import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layouts/layout";

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
    </Routes>
  );
};

export default App;
