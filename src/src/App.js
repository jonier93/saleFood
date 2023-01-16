import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {Header} from './components/header'
import { NavBar } from './components/navBar';
import { Footer } from './components/footer'; 

function App() {
  return (
    <div className="App">
      <Header />      
      <NavBar />          
      <Footer />
    </div>
  );
}

export default App;
