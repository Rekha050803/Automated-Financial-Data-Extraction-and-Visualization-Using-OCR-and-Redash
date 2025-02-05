// RedashComponent.js
import React from 'react';


const Zerodha = () => {
  return (
    <iframe
      title="Redash Visualization"
      width="300%"
      height="600"
      src="http://178.63.152.236/embed/query/19/visualization/28?api_key=API KEY" // Replace with your Redash visualization URL
      frameBorder="0"
    ></iframe>
  );
};

export default Zerodha;
