// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/header/header';
import Home from './components/views/home';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
