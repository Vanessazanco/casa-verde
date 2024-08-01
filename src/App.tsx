import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import HowTo from './components/HowTo';
import Offers from './components/Offers';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Newsletter />
      <HowTo />    
      <Offers />
    </>
  );
}

export default App;
