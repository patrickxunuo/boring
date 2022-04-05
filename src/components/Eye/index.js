import React from 'react';
import useCalDegree from "../../hooks/useCalDegree";
import './styles.css'
import useGeneratePos from "../../hooks/useGeneratePos";

const Eye = () => {
  const {top, left} = useGeneratePos()
  const degree = useCalDegree(top, left)

  return (
    <div className="animal-eye "
         style={{
           transform: `rotate(${degree}deg)`,
           top,
           left,
         }}
    >
      <div className="animal-eye-ball"
      />
    </div>
  );
};

export default Eye;
