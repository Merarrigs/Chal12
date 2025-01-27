import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    gif: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHg5aDA4Z2Nja3lqZnJnZWEzNDNlbTdzYWV4NnE4ZHR3ZGQzdzgxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/139eZBmH1HTyRa/giphy.gif',
    link: 'https://github.com/Merarrigs/Vehicle_Builder',
    name: 'Vehicle Builder',
  },
  {
    gif: 'https://media1.tenor.com/m/hA2VAmjEyd4AAAAd/we-love.gif',
    link: 'https://github.com/Merarrigs/Tracker',
    name: 'Tracker',
  },
];

const Portfile = () => (
  <div className='portfile-container'>
    {projects.map(({ link, gif, name }, index) => (
      <Project key={index} link={link} gif={gif} name={name} />
    ))}
  </div>
);

export default Portfile;