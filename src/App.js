import { Navbar, Header, AboutUs, ContactUs, Projects, OurClients, Footer, ProjectsPage } from "./components"
import 'mapbox-gl/dist/mapbox-gl.css'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Projects />
      <OurClients />
      <ContactUs />
      <Footer />
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
