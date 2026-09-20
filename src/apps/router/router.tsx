import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "../layouts/PublicLayout";
// Components
import Loading from "@/shared/ui/components/Loading/Loading";
import ScrollToTopButton from "@/shared/ui/components/ScrollToTopButton";
// Routes
const Home = lazy(() => import("../../pages/LandingPage/index"));
const Resume = lazy(() => import("../../pages/Resume"));
const TechStack = lazy(() => import("../../pages/TechStack"));
const Project = lazy(() => import("../../pages/Project"));
const ProjectDetail = lazy(() => import("../../pages/ProjectDetail"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/tech-stacks" element={<TechStack />} />
            <Route path="/projects/" element={<Project />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      <ScrollToTopButton />
    </BrowserRouter>
  );
};

export default Router;
