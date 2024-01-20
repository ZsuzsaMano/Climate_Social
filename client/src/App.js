
import { useContext } from 'react';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Inputbar from './components/Inputbar';
import DataContextProvider from './context/DataContext';
import { LoginContext } from './context/LoginContext';

function App() {
  const { isLoggedIn } =
    useContext(LoginContext);
  return (
    <div className="max-w-5xl mx-auto">
      <DataContextProvider>
        <Header />
       {isLoggedIn && <Inputbar />}
        <Board />
      </DataContextProvider>
    </div>
  );
}

export default App;
