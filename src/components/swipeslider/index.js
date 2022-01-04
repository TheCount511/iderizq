import { CarouselWrapper, CarouselContainer, CarouselItemContainer, Button, IndicatorContainer, Indicator } from "./styles/carousel"
import leftBtn from '../../svg/buttons/leftBtn.svg'
import rightBtn from '../../svg/buttons/rightBtn.svg'


const CarouselImage = ({ children, handler, ...restProps }) => {
  return <CarouselWrapper {...restProps} {...handler}>{children}</CarouselWrapper>;
};

CarouselImage.Container = ({ children, ...restProps }) => {
  return <CarouselContainer {...restProps}>{children}</CarouselContainer>;
};

CarouselImage.ItemContainer = ({ children, ...restProps }) => {
  return <CarouselItemContainer {...restProps}>{children}</CarouselItemContainer>
};

CarouselImage.Buttons = ({handleClickPrev, handleClickNext}) => {
  return (
    <div>
      <Button src={leftBtn} side="prev" onClick={handleClickPrev} />
      <Button src={rightBtn} side="next" onClick={handleClickNext} />
    </div>
  );
};

CarouselImage.ItemIndicator = ({ children, ...restProps }) => {
  return <IndicatorContainer {...restProps}>{children}</IndicatorContainer>;
};

CarouselImage.Indicator =({children, activeButton, onClick, ...restProps})=>{
    return <Indicator activeButton={activeButton} onClick={onClick} {...restProps}></Indicator>
}

export default CarouselImage