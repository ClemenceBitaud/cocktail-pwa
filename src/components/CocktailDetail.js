import {createStyles, Title, Flex, Text, Skeleton} from '@mantine/core';
import {useEffect, useState} from "react";

const useStyles = createStyles((theme) => ({

    image: {
        width: `${100}%`,
        height: `300px`,
        objectFit: "cover",
        borderRadius: 20
    },

    content : {
        margin: theme.spacing.xs
    },

    ingredientContent:{
        border: '2px solid #FFC76E',
        borderRadius: 20,
        padding: theme.spacing.xs
    }

}));

const CocktailDetail = ({idCocktail}) => {
    const { classes} = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsLoaded(true);
                setCocktail(data.drinks[0]);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, [idCocktail]);

    if (error){
        return <div>{error}</div>
    }else if(!isLoaded){
        return <Skeleton height={50} circle mb="xl" />
    }else{
        return(
            <div>
                <img className={classes.image} src={cocktail.strDrinkThumb} alt="detail cocktail"/>
                <Flex className={classes.content} direction="column">
                    <Title size={"h3"}>{cocktail.strDrink}</Title>
                    <Text>{cocktail.strInstructions}</Text>
                    <Flex direction="column" className={classes.ingredientContent}>
                        <Title align="center" size={"h5"}>Ingredients</Title>
                        <span>{cocktail.strMeasure1} {cocktail.strIngredient1}</span>
                        <span>{cocktail.strMeasure2} {cocktail.strIngredient2}</span>
                        <span>{cocktail.strMeasure3} {cocktail.strIngredient3}</span>
                        <span>{cocktail.strMeasure4} {cocktail.strIngredient4}</span>
                        <span>{cocktail.strMeasure5} {cocktail.strIngredient5}</span>
                        <span>{cocktail.strMeasure6} {cocktail.strIngredient6}</span>
                        <span>{cocktail.strMeasure7} {cocktail.strIngredient7}</span>
                        <span>{cocktail.strMeasure8} {cocktail.strIngredient8}</span>
                        <span>{cocktail.strMeasure9} {cocktail.strIngredient9}</span>
                        <span>{cocktail.strMeasure10} {cocktail.strIngredien10}</span>
                        <span>{cocktail.strMeasure11} {cocktail.strIngredient11}</span>
                        <span>{cocktail.strMeasure12} {cocktail.strIngredient12}</span>
                        <span>{cocktail.strMeasure13} {cocktail.strIngredient13}</span>
                        <span>{cocktail.strMeasure14} {cocktail.strIngredient14}</span>
                        <span>{cocktail.strMeasure15} {cocktail.strIngredient15}</span>
                    </Flex>
                </Flex>

            </div>
        )
    }

}
export default CocktailDetail;
