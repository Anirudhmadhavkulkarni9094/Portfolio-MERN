import React, { useState, useEffect } from 'react';
import '../Resources/StyleSheet/Home.css'
function Home() {
  const [text, setText] = useState('');
  const fullText = "Heello There! Welcome to My Portfolio website! My name is Anirudh kulkarni and I'm a B.E Graduate from Bangalore Institute of Technology";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length-1) {
        clearInterval(typingInterval)
      }
    }, 50); // Adjust the delay here (in milliseconds) to control typing speed
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div className='row m-5 home'>
        <div className='col-lg-6 text-light d-flex justify-content-center align-items-center my-5'>
          <h3>{text}</h3>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-center W-50'>
          <img src={require("../Resources/Img/Earth.gif")} className='image'  alt='Earth' />
        </div>
      </div>
    </>
  );
}

export default Home;
