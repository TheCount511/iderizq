import { ProductPrice, ProductSummary, SliderWrapper, Indicator } from "./styles/slider"

const Slider=({children, ...restProps})=>{
    return <SliderWrapper {...restProps}>{children}</SliderWrapper>
}

Slider.ProductSummary=({children, ...restProps})=>{
    return <ProductSummary {...restProps}>{children}</ProductSummary>
}

Slider.ProductPrice =({children, ...restProps})=>{
    return <ProductPrice {...restProps}>{children}</ProductPrice>
}

Slider.Indicator =({children,activeButton, ...restProps})=>{
    return <Indicator activeButton={activeButton} {...restProps}></Indicator>
}


export default Slider;