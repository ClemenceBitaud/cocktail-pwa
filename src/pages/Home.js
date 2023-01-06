import Navbar from "../components/Navbar";
import RetroButton from "../components/RetroButton";

const Home = () => {

    return(
        <div>
            <Navbar/>
            <RetroButton label={"Find a cocktail"} linkTo={"/cocktail"}/>
        </div>

    )
}
export default Home;