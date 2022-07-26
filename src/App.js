
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentsData from './pages/StudentsData';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ApplicationForm from './pages/ApplicationForm';
import ContactUs from './pages/ContactUs';


function App() {
  return (
     <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/aboutUs'} element={<AboutUs />} />
          <Route path={'/gallery'} element={<Gallery />} />
          <Route path={'/studentsData'} element={<StudentsData />} />
          <Route path={'/contactUs'} element={<ContactUs />} />
          <Route path={'/applicationForm'} element={<ApplicationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;




// import './App.css';
// import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello Pwc Trainees</h1>
//      <Counter/>
//     </div>
//   )
// }

// export default App;
