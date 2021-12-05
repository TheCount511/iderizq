import React ,{useState} from "react"
import { CarouselWrapper, CarouselContainer, CarouselItemContainer, Button, IndicatorContainer, Indicator } from "./styles/carousel"
import leftBtn from '../../svg/buttons/leftBtn.svg'
import rightBtn from '../../svg/buttons/rightBtn.svg'

const data = ["item"+1,"item"+2,"item"+3,"item"+4,"item"+5]


const SwipeCarousel = ({children, width, ...restProps})=> {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex)=>{
        if (newIndex < 0){
            newIndex = 0;
        }
        else if (newIndex >= data.length){
            newIndex = data.length-1;
        }
        setActiveIndex(newIndex)
    }

    const handleClickPrev =()=>{
        updateIndex(activeIndex - 1)
    }

    const handleClickNext =()=>{
        updateIndex(activeIndex + 1)
    }
    return (
        <CarouselWrapper>
            <CarouselContainer style={{transform:`translateX(-${activeIndex * 100}%)`}}>
                { 
                  data.map((item, index) => {
                  return  <CarouselItemContainer style ={{width:`100%`}} key={`${index}`}>
                        {item}
                    </CarouselItemContainer>    
                  })
                }    
            </CarouselContainer>
            <Buttons
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}/>
            <ItemIndicator>
                {data.map((item, index)=>{
                   return <Indicator key={`${index}`} onClick={()=>{
                       updateIndex(index)
                   }} />
                })}
            </ItemIndicator>
        </CarouselWrapper>
    )
}


const Buttons = ({handleClickPrev, handleClickNext})=>{
    return(
        <>
        <Button src={leftBtn} side="prev" onClick={handleClickPrev}/>
        <Button src={rightBtn} side="next" onClick={handleClickNext}/>     
        </>
    );
}
const ItemIndicator =({children, ...restProps})=>{
    return(<IndicatorContainer>
            {children}
    </IndicatorContainer>)
}

export default SwipeCarousel