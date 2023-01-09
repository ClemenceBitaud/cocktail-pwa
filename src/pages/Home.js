import HomeSection from "../components/HomeSection";
import RandomSection from "../components/RandomSection";
import {createStyles, Flex} from "@mantine/core";
import TitleSeeMore from "../components/TitleSeeMore";
import CocktailCard from "../components/CocktailCard";
import Header from "../components/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import BottomNavBar from "../components/BottomNavBar";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // Media query with value from theme
        [`@media (max-width: 600px)`]: {
            marginRight: `${1}em`,
            marginLeft: `${1}em`,
            marginTop: `${0.5}em`,
        },
    },

    section : {
        marginTop: theme.spacing.xl
    },
}));

const Home = () => {

    const { classes} = useStyles();
    const {width} = useWindowDimensions();
    const activeLink = "Home";

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            <Flex direction={{ base: 'column', md:'row'}} className={classes.section}>
                <HomeSection/>
                <RandomSection/>
            </Flex>
            <TitleSeeMore/>
            <CocktailCard/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>

    )
}
export default Home;