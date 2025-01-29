import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'






function Footer() {
    return (
      <div className='main-container'>
        <Link to="https://github.com/Merarrigs">
          <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" />
        </Link>
        <Link to="https://www.linkedin.com/in/jmerarrigs/">
          <img src='./src/assets/link.png'/>
        </Link>
      </div>
    )
  }
  
  export default Footer