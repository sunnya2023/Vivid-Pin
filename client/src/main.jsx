import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./routes/homePage/HomePage.jsx";
import CreatePage from "./routes/createPage/createPage.jsx";
import AuthPage from "./routes/authpage/AuthPage.jsx";
import PostPage from "./routes/postpage/PostPage.jsx";
import SearchPage from "./routes/searchPage/searchPage.jsx";
import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
import MainLayout from "./routes/layouts/MainLayout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
