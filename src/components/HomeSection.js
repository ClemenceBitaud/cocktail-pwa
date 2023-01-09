import useWindowDimensions from "../utils/windowDimensionHook";
import WelcomeButton from "./button/WelcomeButton";
import WelcomeItem from "./item/WelcomeItem";

const ChooseHomeSection = ({width}) => {
    if (width <= 600){
        return <WelcomeButton/>
    }
    return <WelcomeItem/>
}

const HomeSection = () => {

    const { width } = useWindowDimensions();
    return(
        <ChooseHomeSection width={width}/>
    )
}
export default HomeSection;
