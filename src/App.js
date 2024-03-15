import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBarComp';
import ItemLisContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
      <BrowserRouter>
      <NavBarComp/>
      <Routes>
          <Route path='/' element={<ItemLisContainer greeting="Welcome to Barber"/>} />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
          <Route path='/categories/:categoryId' element={<ItemLisContainer/>}/>
          
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
