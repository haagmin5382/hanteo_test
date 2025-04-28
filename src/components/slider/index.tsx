"use client";
import Layout from "./layout";
import SlideCard from "./SlideCard";
import "./slider.scss";
import { slideData } from "./data.json";
import SliderDot from "./SliderDot";
import { useEffect, useRef, useState } from "react";
const Index = () => {
  const totalSlides = slideData.length;
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    }

    if (slideRef.current && slideIndex >= totalSlides - 1) {
      setSlideIndex(0);
      slideRef.current.style.transform = "translateX(0%)";
    } else {
      if (slideRef.current) {
        setSlideIndex(slideIndex + 1);
        slideRef.current.style.transform = `translate(-${
          (slideIndex + 1) * 100
        }%)`;
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // 5초에 한번씩 슬라이드가 이동
    return () => clearTimeout(timer);
  }, [slideIndex]);
  return (
    <Layout>
      <div className="slider__viewport" ref={slideRef}>
        {slideData.map(({ id, image, description, link }) => (
          <SlideCard
            key={id}
            image={image}
            description={description}
            link={link}
          />
        ))}
      </div>
      <SliderDot slideIndex={slideIndex} />
    </Layout>
  );
};

export default Index;
