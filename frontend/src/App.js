import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Market from './components/market/Market';

import Navbar from './components/navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  let queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="green_gradient hero-gradient" />
      <div className="blue_gradient hero-gradient_left" />
      <div className="box-width">
        <Hero />
      </div>
      <Market />
      <div className="relative">
        <div className="green_gradient about-gradient" />
        <div className="box-width">
          <About />
        </div>
      </div>
      <div className="box-width">
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
