import React from 'react';
import pic from '../assets/pic.png';
import '../styles/about.css'

export default function About() {
    return (
      <div className='aboutme-container'>
        <h1>About Page</h1>
        <img src={pic} alt="" srcset=""/>

        <h2>My Story</h2>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
         </p>
         
      </div>
    );
  }
  