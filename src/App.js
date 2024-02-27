import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/navbar/NavBarComp';
import ItemLisContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarComp/>
      <ItemLisContainer greeting="Welcome to Barber"/>
    </div>
  );
}

export default App;
