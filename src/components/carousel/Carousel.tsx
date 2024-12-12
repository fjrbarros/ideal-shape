import React from "react";
import { useEffect, useState } from "react";
import * as Styles from "./Carousel.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const showLeftArrow = currentIndex > 0;
  const showRightArrow =
    currentIndex < Math.ceil(items.length / itemsPerPage) - 1;

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      let newItemsPerPage: number;

      if (width <= 600) {
        newItemsPerPage = 1;
      } else if (width <= 900) {
        newItemsPerPage = 2;
      } else if (width <= 1500) {
        newItemsPerPage = 3;
      } else {
        newItemsPerPage = 4;
      }

      const newIndex = Math.floor(
        (currentIndex * itemsPerPage) / newItemsPerPage
      );
      setItemsPerPage(newItemsPerPage);
      setCurrentIndex(newIndex);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [currentIndex, itemsPerPage]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(items.length / itemsPerPage) - 1)
    );
  };

  const cardWidth = 100 / itemsPerPage;

  return (
    <Styles.CarouselContainer>
      {showLeftArrow && (
        <Styles.Arrow direction="left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Styles.Arrow>
      )}
      <Styles.CarouselWrapper>
        <Styles.CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {React.Children.map(items, (child) => (
            <Styles.Card
              key={(child as React.ReactElement)?.key}
              $cardWidth={cardWidth}
            >
              {child}
            </Styles.Card>
          ))}
        </Styles.CarouselContent>
      </Styles.CarouselWrapper>
      {showRightArrow && (
        <Styles.Arrow direction="right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Styles.Arrow>
      )}
    </Styles.CarouselContainer>
  );
};
