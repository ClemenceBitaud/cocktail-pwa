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
    const [error] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails] = useState([]);

    useEffect(() => {
        fetch("http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                // count = data.count;
                // setListPokemon(data.results);
                // setLoader(false);
            });
    }, []);

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin':'*',
    //         },
    //     })
    //         .then((result) => {
    //                 setIsLoaded(true);
    //                 console.log(result.body)
    //                 // setCocktails(result);
    //             },
    //             (error) => {
    //             console.log(error);
    //                 setIsLoaded(true);
    //                 setError(error);
    //             })
    // }, [])

    if (error){
        return <div>{error.message}</div>
    }else{
        return(
            <Flex>
                {cocktails.map(cocktail => (
                    <CocktailCard cocktail={cocktail}/>
                ))}
            </Flex>

        )
    }

}
export default CocktailsList;