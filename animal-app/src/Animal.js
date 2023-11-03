import React from 'react';

const Animal = ({ name, isMammal }) => {
  return (
    <div className="animal">
      <h3>{name}</h3>
      <p>{isMammal ? "Mammal" : "Not a Mammal"}</p>
    </div>
  );
};

export default Animal;
