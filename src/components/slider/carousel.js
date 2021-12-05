
import { useEffect } from 'react';
import { useRef } from 'react';
import { CarouselContainer, Slide} from './styles/slider';
import Buttons from './buttons';

function Carousel({ slideContent, setWidth, xPosition, handleClickPrev, handleClickNext }) {
    const slideRef = useRef();

    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
         return    setWidth(width)
        }
    }, [setWidth])
 

    return (
        <CarouselContainer>

            <Slide xPosition={xPosition} ref={slideRef}>
                {slideContent.map((content, ind) => {
                  return  <img src={content.image} alt={'topContent'} key={`${content.id}`} />
})}
            </Slide>
            <Buttons
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}/>
        </CarouselContainer>
    )
}

export default Carousel;