
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Inputbar from './components/Inputbar';

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <Inputbar />
      <Board />
    </div>
  );
}

export default App;
