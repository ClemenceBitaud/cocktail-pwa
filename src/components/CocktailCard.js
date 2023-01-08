import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, Text, Modal} from '@mantine/core';
import image from '../assets/alcohol.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from "react";
import CocktailDetail from "./CocktailDetail";
import './Modal.css';

const useStyles = createStyles((theme) => ({

    card : {
        width: 165,
    },

    borderOrange : {
        position: "fixed",
        width: 165,
        height: `${23.5}%`,
        border: '2px solid #FFC76E',
        borderRadius: 15,
        zIndex: -1,
        marginTop: theme.spacing.md,
    },

    cocktailImage : {
        width: 119,
        height: 144,
        objectFit: "cover",
        borderRadius: 15
    },

    eyeIcon : {
        width: 35,
        height: 35,
        backgroundColor: "#B8D1CD",
        boxShadow: '0px 5px 6px rgba(0, 101, 85, 0.1)',
        borderRadius: 20,
        marginRight: theme.spacing.xs,
        cursor: "pointer"
    },

    heartIcon : {
        width: 32,
        height: 32,
        border: '2px solid #FFB3BC',
        backgroundColor: "white",
        borderRadius: 20,
        marginLeft: theme.spacing.xs,
        cursor: "pointer"
    },
}));

const CocktailCard = ({cocktail}) => {

    const navigate = useNavigate();
    const { classes} = useStyles();
    const [opened, setOpened] = useState(false);

    return(
        <Flex justify="center" className={classes.card}>
            <div className={classes.borderOrange}/>
            <Flex direction="column" align="center">
                <img src={image} className={classes.cocktailImage}/>
                <Text>Nom</Text>
                <Flex>
                    <Flex justify="center" align="center" className={classes.eyeIcon} onClick={() =>setOpened(true)}>
                        <VisibilityIcon sx={{color: '#006555'}}/>
                    </Flex>
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
                <CocktailDetail/>
            </Modal>
        </Flex>

    )
}
export default CocktailCard;
