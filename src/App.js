import { Navbar, Header, AboutUs, ContactUs, Projects, OurClients, Footer, ProjectsPage } from "./components"
import 'mapbox-gl/dist/mapbox-gl.css'

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Header />
      <AboutUs />
      <Projects />
      <OurClients />
      <ContactUs />
      <Footer /> */}
      <Navbar />
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default App
