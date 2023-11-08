import logo from './logo.svg';
import './App.css';
import Main_page from './components/main/main';
import { BrowserRouter } from 'react-router-dom';
//const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
  return (
    <div className="App1">
        <BrowserRouter >
          <Main_page/>
        </BrowserRouter>
    </div>
  );
}

