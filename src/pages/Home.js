import {createStyles, Flex} from "@mantine/core";
import TitleSeeMore from "../components/write/TitleSeeMore";
import Header from "../components/item/Header";
import useWindowDimensions from "../utils/windowDimensionHook";
import BottomNavBar from "../components/navigation/BottomNavBar";
import CocktailsList from "../components/list/CocktailsList";
import {useEffect, useState} from "react";
import InformationSection from "../components/item/InformationSection";

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
                {/*<HomeSection/>*/}
                <InformationSection
                    title={"Welcome in World of Cocktails"}
                    text={"No idea for an aperitif or a party? A cocktail in mind but you don't know how to make it? No original drink for your SAM?"}
                    buttonText={"Find a cocktail"}
                    linkTo={"/cocktail"}
                    color={"#FFB3BC"}
                    isBorder={false}
                    flex={2}
                    desktopAlign={"flex-start"}
                />
                <InformationSection
                    title={""}
                    text={"Want to spice things up? Let us choose for you!"}
                    buttonText={"Start the random search !"}
                    linkTo={"/cocktail"}
                    color={"#B8D1CD"}
                    isBorder={true}
                    flex={1}
                    desktopAlign={"center"}
                />
            </Flex>
            <TitleSeeMore title={"Cocktails"} linkTo={"/cocktail"}/>
            <CocktailsList cocktails={cocktails} error={error}/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>

    )
}
export default Home;