import { Wrapper } from "./styles/slider"
import { useState, useCallback } from 'react';
import slideContent from '../../utils/slidecontent.json'
import { useEffect } from "react";
import Carousel from "./carousel";

const Slider =()=>{
    const [index, setIndex]= useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition]=useState(0);

    const handleClickPrev=()=>{
        if (index===0) return;
        setIndex(index-1);
        setXPosition(xPosition+width);
    };



    const handleClickNext = () => 
    {
          if (index===slideContent.length-1) 
              {
              setIndex(0);
              setXPosition(0);}
              else{
                  setIndex(index+1);
                  setXPosition(xPosition-width);
              }
  
          }
  


//   const handleClickNext = useCallback(() => 
//   {
//         if (index===slideContent.length-1) 
//             {
//             setIndex(0);
//             setXPosition(0);}
//             else{
//                 setIndex(index+1);
//                 setXPosition(xPosition-width);
//             }

//         },[index, width, xPosition]);

//     useEffect(()=>{
//         const handleAutoplay = setInterval(handleClickNext, 3000);
//         return ()=>clearInterval(handleAutoplay);
//     }, [handleClickNext])
    
    return (
    <Wrapper>
            <Carousel
                slideContent={slideContent}
                setWidth={setWidth}
                xPosition = {xPosition}
                handleClickPrev={handleClickPrev}
                handleClickNext={handleClickNext}
                />
    </Wrapper>);
}

export default Slider;