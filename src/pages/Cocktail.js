import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import {createStyles} from "@mantine/core";
import useWindowDimensions from "../utils/windowDimensionHook";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CocktailsList from "../components/CocktailsList";

const useStyles = createStyles((theme) => ({

    main : {
        marginRight: `${2}em`,
        marginLeft: `${2}em`,
        marginTop: `${0.5}em`,

        // SMARTPHONE
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

const Cocktail = () => {

    const { classes} = useStyles();
    const {width} = useWindowDimensions();
    const activeLink = "Cocktail";
    const {search} = useParams();
    console.log(search);
    const [error, setError] = useState(null);
    // const [setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        if (search === undefined){
            const saved = JSON.parse(localStorage.getItem("alcoholic-cocktails"));
            setCocktails(saved);

        }else{
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    // setIsLoaded(true);
                    const drinks = data.drinks;
                    setCocktails(drinks);

                }, (error) => {
                    // setIsLoaded(true);
                    setError(error);
                });
        }

    }, [search]);

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            <CocktailsList cocktails={cocktails} error={error}/>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Cocktail;