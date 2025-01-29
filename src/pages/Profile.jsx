import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    img: 'https://www.istockphoto.com/photo/deep-learning-artificial-intelligence-background-gm1310293181-399750087',
    link: 'https://github.com/Merarrigs/Vehicle_Builder',
    name: 'Vehicle Builder',
  },
  {
    img: './src/assets/it_computer_programming.jpg',
    link: 'https://github.com/Merarrigs/Tracker',
    name: 'Tracker',
  },
  {
    img: './src/assets/circle.png',
    link: 'https://github.com/Merarrigs/README_GEN',
    name: 'README_GEN',
  },
];

const Portfile = () => (
  <div className='portfile-container'>
    {projects.map(({ link, img, name }, index) => (
      <Project key={index} link={link} img={img} name={name} />
    ))}
  </div>
);

export default Portfile;