import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <Products />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
