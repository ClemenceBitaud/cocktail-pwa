// import {createStyles, Flex} from "@mantine/core";
import CocktailCard from "../components/CocktailCard";
import {useEffect, useState} from "react";
import {Flex} from "@mantine/core";

// const useStyles = createStyles((theme) => ({
//
//     main : {
//         marginRight: `${2}em`,
//         marginLeft: `${2}em`,
//         marginTop: `${0.5}em`,
//
//         // Media query with value from theme
//         [`@media (max-width: 600px)`]: {
//             marginRight: `${1}em`,
//             marginLeft: `${1}em`,
//             marginTop: `${0.5}em`,
//         },
//     },
//
//     section : {
//         marginTop: theme.spacing.xl
//     },
// }));

const CocktailsList = () => {

    // const { classes} = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsLoaded(true);
                setCocktails(data.drinks.slice(0,15));
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    if (error){
        return <div>{error.message}</div>
    }else{
        return(
            <Flex wrap="wrap" justify="center">
                {cocktails.map(cocktail => (
                    <CocktailCard cocktail={cocktail} isLoaded={isLoaded} key={cocktail.strDrink}/>
                ))}
            </Flex>

        )
    }

}
export default CocktailsList;