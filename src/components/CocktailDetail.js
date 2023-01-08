import {createStyles, Title} from '@mantine/core';
import image from '../assets/alcohol.jpg';

const useStyles = createStyles((theme) => ({

    image: {
        width: `${100}%`,
        height: `${25}%`,
        objectFit: "cover",
        borderRadius: 20
    }

}));

const CocktailDetail = ({cocktail}) => {
    const { classes} = useStyles();

    return(
        <div className={classes.card}>
            <img className={classes.image} src={image} alt="detail cocktail"/>
            <Title size={"h3"}>Nom</Title>
        </div>

    )
}
export default CocktailDetail;
