import { Navbar, Header, AboutUs, ContactUs, Projects, OurClients, Footer } from "./components"
import 'mapbox-gl/dist/mapbox-gl.css'
import { Routes, Route, Link } from "react-router-dom"

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
