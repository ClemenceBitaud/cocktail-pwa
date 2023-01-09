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

const CocktailsList = ({cocktails, error}) => {

    // const { classes} = useStyles();

    if (error){
        return <div>{error.message}</div>
    }else{
        return(
            <Flex wrap="wrap" justify="center">
                {cocktails.map(cocktail => (
                    <CocktailCard cocktail={cocktail} key={cocktail.strDrink}/>
                ))}
            </Flex>

        )
    }

}
export default CocktailsList;