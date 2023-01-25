import './App.css';
import Contacts from './components/Contacts';
import FormContact from './components/FormContact';
import ContactContextProvider from './context/ContactContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/form" element={<FormContact/>} />
        </Routes>
      </ContactContextProvider>
    </div>
  );
}

export default App;
