import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBarComp';
import ItemLisContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { NoMatch } from './components/NoMatch';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
function App() {
  
  return (
      <CartProvider>
      <BrowserRouter>
      <NavBarComp/>
      <Routes>
          <Route path='/' element={<ItemLisContainer greeting="Welcome to Barber"/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemLisContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} /> 
          <Route path='*' element={<NoMatch/>} />

      </Routes>
      </BrowserRouter>
      </CartProvider>
 
  );
}

export default App;
