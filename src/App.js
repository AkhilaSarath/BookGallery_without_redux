
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './Header';
import BookView from './BookView';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Gallery/>}/>
        <Route path='/singleView/:id' element={<BookView/>}/>
      </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
