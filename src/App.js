import {
  Navbar,
  Header,
  AboutUs,
  ContactUs,
  Projects,
  OurClients,
  Footer,
  ProjectsPage,
} from "./components";
import "mapbox-gl/dist/mapbox-gl.css";
import { Route, Routes } from "react-router-dom";
import SingleProject from "./components/singleProject/SingleProject";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
