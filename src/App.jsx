import React from "react";
// import WelcomeCard from "./components/WelcomeCard";
// import UserProfile from "./components/UserProfile";
// import IntersectionObservers from "./components/IntersectionObserver";
// import ResizableBox from "./components/ResizeObserver";
// import LocationComponent from "./components/LocationComponent";
import LoginForm from "./components/LoginForm";
// import AuthPage from "./components/AuthPage";
// // import InputFocus from "./components/InputFocus";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserProfile from "./components/UserProfile";
import MainLayout from "./components/MainLayout";
import LogiPaage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";
import GetUser from "./components/GetUser";
import Mock from "./pages/Mock";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Точное совпадение не требуется, алгоритм v6 сам выберет лучший маршрут */}
        <Route index element={<Home />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/about" element={<About />} />
        {/* Wildcard * ловит все, что не совпало выше (404) */}
        {/* <Route path="/users/:id" element={<UserProfile />} /> */}
        <Route path="/user/:id" element={<GetUser />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* Маршрут БЕЗ Layout (например, страница логина) */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/auth" element={<LogiPaage />} />
    </Routes>
  );
};

export default App;

//https://gist.github.com/dmitry-osin/a1249ae982c9345db530bf116ea093b3#101-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0
