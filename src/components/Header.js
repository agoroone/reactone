import React from 'react'
import { Link } from 'react-router-dom';
import Photo from './pwc.jpeg';
import Counter from './Counter';
import RecruitmentForm from '../pages/RecruitmentForm';


function Header() {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Website</h3>
      </div>

           <div>
              <Counter />
              <RecruitmentForm/>
      </div>

      <div>
          <Link to='/home'>
            Home
          </Link>
          <Link to="/contactUs">
           Contact Us
          </Link>
          <Link to="/gallery">
           Gallery
          </Link>
          <Link to="/applicationForm">
           Application Form
          </Link>
          <Link to="/aboutUs">
           About Us
          </Link>
          <Link to="/studentsData">
           Students Data
          </Link>
      </div>
    </header>
  )
}

export default Header
