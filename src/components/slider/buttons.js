import leftBtn from '../../svg/buttons/leftBtn.svg'
import rightBtn from '../../svg/buttons/rightBtn.svg'
import { Button } from './styles/slider';

const Buttons=({handleClickPrev, handleClickNext})=>{
    return(
        <>
        <Button src={leftBtn} side="prev" onClick={handleClickPrev}/>
        <Button src={rightBtn} side="next" onClick={handleClickNext}/>     
        </>
    );
}

export default Buttons;