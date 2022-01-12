import { Navbar, Header, AboutUs, ContactUs } from "./components"
import 'mapbox-gl/dist/mapbox-gl.css'
import OurClients from './components/ourClients/OurClients';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <OurClients />
      <ContactUs />
    </>
  )
}

export default App
