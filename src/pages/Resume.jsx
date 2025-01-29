import React from 'react';
import Button from 'react-bootstrap/Button';
import cvFile from '../assets/Jose.Resume.pdf';

function Resume() {

  function downloadOnClick(){
    fetch(cvFile).then((res) => {
      res.blob().then((blob) => {
       const fileURL= window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = cvFile;
        alink.click();
      })
    })
  }
  return (
    <div className='resume-container'>
       <h3>Front end</h3>
       <ul>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          
    
        </ul>
        <h3>Back end</h3>
        <ul>
          <li>Nodejs</li>
          <li>SQL</li>
          
          
        </ul>
        <Button variant="primary" onClick={downloadOnClick}>Resume PDF</Button>

    </div>
  )
}


export default Resume