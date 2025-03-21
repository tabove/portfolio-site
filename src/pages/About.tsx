import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState<string>('');

  useEffect(() => {
    axios.get<string>('http://localhost:8080/api/about')
      .then((response) => setAboutInfo(response.data))
      .catch((error) => console.error('Error fetching about info:', error));
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <p>{aboutInfo}</p>
    </div>
  );
};

export default About;