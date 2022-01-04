import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Slider } from "../components";
import slideContent from "../utils/slidecontent.json";


const HeaderSlider = () => {

  return (
    <div style={{ width: "100%", height: "100%", margin: "auto" }}>
      <Carousel
        isLoop={true}
        hasIndexBoard={false}
        hasMediaButton={false}
        hasMediaButtonAtMax={false}
        hasSizeButton={false}
        hasDotButtons="bottomCenter"
        hasDotButtonsAtMax ={true}
        hasThumbnails={false}
        shouldSwipeOnMouse={true} // for selecting text
        shouldMinimizeOnSwipeDown={false} // for vertical overflow scrolling
        index={0}
        canAutoPlay={true}
        isAutoPlaying={true}
        activeIcon={
            <Slider.Indicator activeButton={"active"}/>
          }
        passiveIcon={
            <Slider.Indicator activeButton={"inactive"}/>
          }  
        // // onIndexChange={({ curIndex }) => {
        //   const title = indexToTitle.get(curIndex);
        //   window.location.hash = title;
        //   document.title = `${title} | react-gallery-carousel`;
        // }} // this callback can be set to update the document title and URL hash on index update
        style={{ userSelect: "text" }}
      >
          {slideContent.map((item, index) => {
            return (
              <Slider
                style={{ width: `100%` }}
                key={`${item.id}`}
                src={item.image}
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default HeaderSlider;
