import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import slideContent from "../../utils/slidecontent.json";
import {CarouselImage} from ".."

const Carousel = () => {
    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = slideContent.length - 1;
        } else if (newIndex >= slideContent.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    const handleClickPrev = () => {
        updateIndex(activeIndex - 1);
    };

    const handleClickNext = () => {
        updateIndex(activeIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 5000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div >
        <CarouselImage
            handler={handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <CarouselImage.Container style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {slideContent.map((item, index) => {
                    return (
                        <CarouselImage.ItemContainer
                            style={{ width: `100%` }}
                            key={`${item.id}`}
                            src={item.image}
                        />
                            
                    );
                })}
            </CarouselImage.Container>
            <CarouselImage.Buttons
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}
            />
            <CarouselImage.ItemIndicator>
                {slideContent.map((item, index) => {
                    return (
                        <CarouselImage.Indicator
                            key={`${index}`}
                            activeButton={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                            updateIndex(index);
                            }}
                        />
                    );
                })}
            </CarouselImage.ItemIndicator>
        </CarouselImage>
        </div>
    );
};

export default Carousel;
