import {useNavigate} from 'react-router-dom';
import {createStyles,UnstyledButton, Text} from '@mantine/core';

const useStyles = createStyles((theme) => ({

    button: {
        textAlign: "center",
        backgroundColor: "#B8D1CD",
        boxShadow: "0px 5px 6px rgba(0, 101, 85, 0.1)",
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xs
    },

}));

const RandomButton = () => {

    const navigate = useNavigate();
    const { classes} = useStyles();

    return(
        <UnstyledButton
            className={classes.button}
            onClick={(event) => {
                event.preventDefault();
                navigate("/cocktail");
            }}
        >
            <Text fz="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate suscipit purus at dignissim. In blandit imperdiet vulputate. Suspendisse potenti. Cras ullamcorper at risus vel mattis. Ut semper at lacus et molestie.</Text>
        </UnstyledButton>
    )
}
export default RandomButton;
