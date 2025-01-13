/* eslint-disable react/prop-types */
import "./Image.css";

const Image = ({ source, description }) => {
  return (
    <div className="Card-Image">
      <img src={source} alt={description} />
    </div>
  );
};

export { Image };
