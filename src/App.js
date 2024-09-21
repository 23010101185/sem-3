import { Outlet } from 'react-router-dom';
import Contant from './Lab 12/Contant'
import Header from './Lab 12/Header'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

export default App;
