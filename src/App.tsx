import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

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
