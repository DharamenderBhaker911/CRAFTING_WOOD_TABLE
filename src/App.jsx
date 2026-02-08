import Navbar from './context/components/Navbar';
import Hero from './context/components/Hero';
import About from './context/components/About';
import Products from './context/components/Products';
import Footer from './context/components/Footer';
import Cart from './context/components/Cart';
import WhatsAppFloat from './context/components/WhatsAppFloat';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Footer />
        <Cart />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  );
}

export default App;
