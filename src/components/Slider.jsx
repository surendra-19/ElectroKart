import { useState, useEffect, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Slider = ({ productsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const slideRef = useRef(null);

  const totalSlides = productsList.length;
  const extendedSlides = [productsList[totalSlides - 1], ...productsList, productsList[0]];

  useEffect(() => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
    }
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1);
        setTimeout(() => setIsAnimating(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalSlides);
        setTimeout(() => setIsAnimating(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={slideRef}
        className={`flex ${isAnimating ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedSlides.map((category, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/3 px-2 py-8.5 bg-white/30 backdrop-blur-md cursor-pointer hover:bg-white/40 transition"
      >
        <BiSolidLeftArrow size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/3 px-2 py-8.5 bg-white/30 backdrop-blur-md cursor-pointer hover:bg-white/40 transition"
      >
        <BiSolidRightArrow size={20} />
      </button>
    </div>
  );
};

export default Slider;