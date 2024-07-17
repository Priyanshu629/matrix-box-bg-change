import { useEffect, useState } from "react";

const Matrix = () => {
  const [matrix, setMatrix] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [array, setArray] = useState([]);

  const setGreen = (index) => {
    const boxes = document.querySelectorAll(".matrix");

    if (
      boxes[index].style.backgroundColor === "green" ||
      boxes[index].style.backgroundColor === "orange"
    ) {
      return;
    } else {
      setArray([...array, index]);
      boxes[index].style.backgroundColor = "green";
    }
  };

  useEffect(() => {
    let intervalId;
    const boxes = document.querySelectorAll(".matrix");
    if (array.length === 9) {
      for (const index of array) {
        intervalId = setInterval(() => {
          boxes[array[index]].style.backgroundColor = "orange";
        }, index * 500);
      }
    }
    return () => clearInterval(intervalId);
  }, [array]);
  return (
    <div className="box">
      <div className="matrix-container">
        {matrix.map((row, index) => (
          <div onClick={() => setGreen(index)} key={index} className="matrix" />
        ))}
      </div>
    </div>
  );
};

export default Matrix;
