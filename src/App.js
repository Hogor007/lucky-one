import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
