import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import Products from './pages/products';
import { Footer } from './components/Footer';
import { GlobalStyle } from './styles/global';

import 'react-loading-skeleton/dist/skeleton.css'



const queryClient = new QueryClient()

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <Products />
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
