import React from "react";

function Grid({ images }) {
  return (
    <div className="grid-container">
      {images.map((image, id) => (
        <div className="cardbackground">
          <div>
            <img key={id} src={image} alt={`Image+1`} style={{ borderRadius: "10px" }} />
            <div className="h4">
              <p>Movie 1</p>
              <p>2021</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;
