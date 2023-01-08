import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, Text, Modal, Title} from '@mantine/core';
import image from '../assets/alcohol.jpg';
import {useState} from "react";

const useStyles = createStyles((theme) => ({

    image: {
        width: `${100}%`,
        height: `${25}%`,
        objectFit: "cover",
        borderRadius: 20
    }

}));

const CocktailDetail = ({cocktail}) => {

    const navigate = useNavigate();
    const { classes} = useStyles();
    const [opened, setOpened] = useState(false);

    return(
        <div className={classes.card}>
            <img className={classes.image} src={image}/>
            <Title size={"h3"}>Nom</Title>
        </div>

    )
}
export default CocktailDetail;
