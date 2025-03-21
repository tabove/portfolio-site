import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Work = () => {
  const [works, setWorks] = useState<string[]>([]);

  useEffect(() => {
    axios.get<string[]>('http://localhost:8080/api/work')
      .then((response) => setWorks(response.data))
      .catch((error) => console.error('Error fetching works:', error));
  }, []);

  return (
    <div>
      <h1>My Work</h1>
      <ul>
        {works.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
