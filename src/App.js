import './App.css';
import About from './components/About/About';
import Expert from './components/Expert/Expert';
import HappyClient from './components/HappyClient/HappyClient';
import Header from './components/Header/Header';
import LatestWork from './components/LatestWork/LatestWork';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <HappyClient></HappyClient>
        <Service></Service>
        <About></About>
        <Expert></Expert>
        <LatestWork></LatestWork>
      </main>
    </div>
  );
}

export default App;
