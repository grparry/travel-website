import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import ItinerariesPage from './pages/ItinerariesPage'
import ItineraryDetailsPage from './pages/ItineraryDetailsPage'
import AboutPage from './pages/AboutPage'
import CreateItineraryPage from './pages/CreateItineraryPage'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/utils/ScrollToTop'

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations/:id" element={<DestinationPage />} />
        <Route path="/itineraries" element={<ItinerariesPage />} />
        <Route path="/itineraries/:id" element={<ItineraryDetailsPage />} />
        <Route path="/itineraries/create" element={<CreateItineraryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  )
}

export default App
