import React from 'react';
import './AnimationPage.css';

const AnimationPage = () => {
  const boxes = [
    { id: 1, image: './img/carnival2.jpeg', initialText: 'Initial Text 1', hoverText: 'Hover Text 1' },
    { id: 2, image: './img/carnival3.jpeg', initialText: 'Initial Text 2', hoverText: 'Hover Text 2' },
    { id: 3, image: './img/carnival4.jpeg', initialText: 'Initial Text 3', hoverText: 'Hover Text 3' },
    { id: 4, image: './img/carnival5.jpeg', initialText: 'Initial Text 4', hoverText: 'Hover Text 4' },
    { id: 5, image: './img/carnival6.jpeg', initialText: 'Initial Text 5', hoverText: 'Hover Text 5' },
<<<<<<< HEAD
    { id: 6, image: './img/carnival9.jpeg', initialText: 'Initial Text 6', hoverText: 'Hover Text 6' },
=======
    { id: 6, image: './img/wheel.jpg', initialText: 'Initial Text 6', hoverText: 'Hover Text 6' },
>>>>>>> 57dc53630f92319f3d90c11bb21c372aa5cf968a
  ];

  return (
    <div>
      <div className="hover-animation-container">
  {boxes.map((box) => (
    <div className="card-container" key={box.id}>
      <div className="box">
        <div className="image-container">
          <img src={box.image} alt={`Box ${box.id}`} />
          <div className="text-container">{box.initialText}</div>
          <div className="overlay">{box.hoverText}</div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default AnimationPage;
