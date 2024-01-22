
import './App.css';
import Board from './components/Board';
import DataContextProvider from './context/DataContext';


function App() {
  return (
    <main className="max-w-5xl mx-auto">
      <DataContextProvider>
        <Board />
      </DataContextProvider>
    </main>
  );
}

export default App;
