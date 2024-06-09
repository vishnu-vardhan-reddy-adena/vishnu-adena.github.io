import React, { useEffect, useState, useRef } from "react";
import C1 from "../assets/C3.jpg";
import C3 from "../assets/C7.jpg";
import C4 from "../assets/A1.png";
import C6 from "../assets/A2.jpg";
import C7 from "../assets/M4.jpg";
import C8 from "../assets/M8.jpg";
import C9 from "../assets/S1.jpg";
import C10 from "../assets/S2.jpg";
import C11 from "../assets/A4.jpg";

function Carousel() {
  const [myIndex, setMyIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current = Array.from(document.getElementsByClassName("mySlides"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 8); // Change 9 to the number of slides
    }, 2500); // Change interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const showSlides = (index) => {
    slidesRef.current.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  };

  useEffect(() => {
    showSlides(myIndex);
  }, [myIndex]);

  const calculateImageDimensions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const width = 3 * screenWidth;
    const height = (3 / 4) * screenHeight;
    return { width, height };
  };

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "",
          margin: "auto",
          justifyContent: "center",
          padding: "20px",
          marginBlock: "10px",
        }}
      >
        <img
          ref={(el) => (slidesRef.current[0] = el)}
          src={C1}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        
        <img
          ref={(el) => (slidesRef.current[1] = el)}
          src={C3}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="Chicago"
        />
        <img
          ref={(el) => (slidesRef.current[2] = el)}
          src={C4}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        
       
        <img
          ref={(el) => (slidesRef.current[3] = el)}
          src={C7}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        <img
          ref={(el) => (slidesRef.current[4] = el)}
          src={C8}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        <img
          ref={(el) => (slidesRef.current[5] = el)}
          src={C9}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        <img
          ref={(el) => (slidesRef.current[6] = el)}
          src={C10}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        <img
          ref={(el) => (slidesRef.current[7] = el)}
          src={C11}
          style={{
            ...calculateImageDimensions(),
            display: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            borderRadius: "25px",
          }}
          alt="LA"
        />
        
      </div>
    </div>
  );
}

export default Carousel;
