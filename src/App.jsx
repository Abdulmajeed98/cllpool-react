import { lazy, Suspense } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Route, Routes } from "react-router-dom";
import LoadingIndicator from "./components/global/LoadingIndicator";
import { StateProvider } from "./context/AppContext";
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Header = lazy(() => import("./components/header/Header"));
const AboutUs = lazy(() => import("./components/aboutUs/AboutUs"));
const ContactUs = lazy(() => import("./components/contact/ContactUs"));
const OurClients = lazy(() => import("./components/ourClients/OurClients"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ProjectsPage = lazy(() => import("./components/projects/ProjectsPage"));
const SingleProject = lazy(() =>
  import("./components/singleProject/SingleProject")
);

const App = () => {
  return (
    <StateProvider>
      <Suspense
        fallback={
          <LoadingIndicator
            classes={
              "flex justify-center items-center w-screen h-screen text-4xl gap-8"
            }
          />
        }
      >
        <Navbar />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Projects />
                  <OurClients />
                  <ContactUs />
                </>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<SingleProject />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </StateProvider>
  );
};

export default App;
