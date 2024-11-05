import React, {useState} from 'react';

const Youtube = () => {

  return (
    <div id="movie" className="wapper-common">
      <div className="movie">
        <iframe src="https://www.youtube.com/embed/hRe-6NwOkQ8" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Youtube;
