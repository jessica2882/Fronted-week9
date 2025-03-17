import React , {useState}from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  
  /* You will need to hanle the click on left and right button */

  /* You will need to manage the cases when we are on the last image or first image*/
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftClick = () => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle right button click
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick = {handleLeftClick} />

      {/* YOu will need to display the current image, not the first one.. */}
       <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick = {handleRightClick} />
    </div>
  );
};

