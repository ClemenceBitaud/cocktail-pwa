import {createStyles, Flex, Text, Modal} from '@mantine/core';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import CocktailDetail from "./CocktailDetail";
import './Modal.css';

const useStyles = createStyles((theme) => ({

    card : {
        width: 145,
        border: '2px solid #FFC76E',
        borderRadius: 15,
        padding: theme.spacing.xs,
        cursor: "pointer",
        margin: theme.spacing.sm,

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 70,
        },
    },

    cocktailImage : {
        width: 119,
        height: 144,
        objectFit: "cover",
        borderRadius: 15,

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 64,
            height: 77,
        },
    },

    heartIcon : {
        width: 32,
        height: 32,
        border: '2px solid #FFB3BC',
        backgroundColor: "white",
        borderRadius: 20,
        cursor: "pointer",

        // SMARTPHONE
        [`@media (max-width: 600px)`]: {
            width: 20,
            height: 20,
        },
    },
}));

const CocktailCard = ({cocktail}) => {

    const { classes} = useStyles();
    const [opened, setOpened] = useState(false);

    return(
        <Flex justify="center" className={classes.card} onClick={() =>setOpened(true)}>
            <Flex direction="column" align="center">
                <img src={cocktail.strDrinkThumb} className={classes.cocktailImage} alt="cocktail"/>
                <Text align="center" size={"sm"}>{cocktail.strDrink}</Text>
                <Flex>
                    <Flex justify="center" align="center" className={classes.heartIcon} onClick={() =>{}}>
                        <FavoriteBorderIcon sx={{ color: '#FFB3BC' }}/>
                    </Flex>
                </Flex>
            </Flex>
            <Modal
                radius={20}
                padding={0}
                opened={opened}
                onClose={() => setOpened(false)}>
                <CocktailDetail idCocktail={cocktail.idDrink}/>
            </Modal>
        </Flex>

    )
}
export default CocktailCard;
