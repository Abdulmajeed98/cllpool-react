import { Navbar, Header, AboutUs, ContactUs, Projects, Footer } from "./components"
import 'mapbox-gl/dist/mapbox-gl.css'
import OurClients from './components/ourClients/OurClients';

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
    </>
  )
}

export default App
