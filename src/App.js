import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { Tasks } from './components/tasks';
import { Goal } from './components/goal';

function App() {

  return (
    <div className="App"> 
      <Header />
      {/* <Tasks /> */}
      <Goal />
      <Footer/>       
    </div>
  );
}

export default App;
