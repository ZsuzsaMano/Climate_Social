
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import DataContextProvider from './context/DataContext';


function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <DataContextProvider>
        <Header />   
        <Board />
      </DataContextProvider>
    </div>
  );
}

export default App;
