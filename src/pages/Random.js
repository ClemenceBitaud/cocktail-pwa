import Header from "../components/item/Header";
import BottomNavBar from "../components/navigation/BottomNavBar";
import {createStyles, Flex} from "@mantine/core";
import useWindowDimensions from "../utils/windowDimensionHook";
import {useState, useEffect} from "react";
import CocktailDetailCard from "../components/card/CocktailDetailCard";
import RetroButton from "../components/button/RetroButton";
import {Box} from "@mui/material";

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

    retroButton: {
        marginBottom: theme.spacing.xs
    },

    cocktailCard: {
        width: '40%',

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: '90%',
        },
    }
}));

const Random = () => {

    const { classes} = useStyles();
    const {width} = useWindowDimensions();
    const activeLink = "Random";
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        handleRandomApi()
    }, []);

    const handleRandomApi = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCocktail(data.drinks[0]);
            }, (error) => {
                console.log(error)
            });
    }

    return(
        <div className={classes.main}>
            <Header activeLink={activeLink}/>
            <Flex direction="column" align="center">
                <Box className={classes.retroButton}>
                    <RetroButton label={"Play again !"} handleClick={handleRandomApi}/>
                </Box>
                <Box className={classes.cocktailCard}>
                    <CocktailDetailCard cocktail={cocktail}/>
                </Box>
            </Flex>
            {width <= 600 ? <BottomNavBar activeLink={activeLink}/> : null}
        </div>
    )
}
export default Random;