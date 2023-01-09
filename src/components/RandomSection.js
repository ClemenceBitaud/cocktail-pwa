import useWindowDimensions from "../utils/windowDimensionHook";
import RandomButton from "./button/RandomButton";
import RandomItem from "./item/RandomItem";

const ChooseRandomSection = ({width}) => {
    if (width <= 600){
        return <RandomButton/>
    }
    return <RandomItem/>
}

const RandomSection = () => {

    const { width } = useWindowDimensions();
    return(
        <ChooseRandomSection width={width}/>
    )
}
export default RandomSection;
