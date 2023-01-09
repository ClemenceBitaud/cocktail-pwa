import HomeSection from "../components/HomeSection";
import RandomSection from "../components/RandomSection";
import {createStyles, Flex} from "@mantine/core";
import TitleSeeMore from "../components/TitleSeeMore";
import Header from "../components/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import BottomNavBar from "../components/BottomNavBar";
import CocktailsList from "../components/CocktailsList";
import {useEffect, useState} from "react";

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
    const [error, setError] = useState(null);
    // const [setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // setIsLoaded(true);
                const drinks = data.drinks;
                setCocktails(drinks.slice(0,15));
                localStorage.setItem("alcoholic-cocktails", JSON.stringify(drinks));

            }, (error) => {
                // setIsLoaded(true);
                setError(error);
            });
    }, []);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            <Flex direction={{ base: 'column', md:'row'}} className={classes.section}>
                <HomeSection/>
                <RandomSection/>
            </Flex>
            <TitleSeeMore title={"Cocktails"} linkTo={"/cocktail"}/>
            <CocktailsList cocktails={cocktails} error={error}/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>

    )
}
export default Home;