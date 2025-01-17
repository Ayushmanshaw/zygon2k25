import React from 'react';
import './AnimationPage.css';

const AnimationPage = () => {
  const boxes = [
    {
      id: 1,
      image: './img/wheel.jpg',
      initialText: 'Initial Text 1',
      hoverText: 'Hover Text 1',
    },
    {
      id: 2,
      image: './img/wheel.jpg',
      initialText: 'Initial Text 2',
      hoverText: 'Hover Text 2',
    },
    {
      id: 3,
      image: './img/wheel.jpg',
      initialText: 'Initial Text 3',
      hoverText: 'Hover Text 3',
    },
    {
      id: 4,
      image: './img/wheel.jpg',
      initialText: 'Initial Text 4',
      hoverText: 'Hover Text 4',
    },
  ];

  return (
    <div className="hover-animation-container">
      {boxes.map((box) => (
        <div className="box" key={box.id}>
          <div className="image-container">
            <img src={box.image} alt={box.id} />
            <div className="text-container">{box.initialText}</div>
            <div className="overlay">{box.hoverText}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnimationPage;