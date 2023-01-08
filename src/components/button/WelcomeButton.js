import {useNavigate} from 'react-router-dom';
import {createStyles, Flex, Title, UnstyledButton, Text} from '@mantine/core';

const useStyles = createStyles((theme) => ({

    button: {
        textAlign: "center",
        backgroundColor: "#FFB3BC",
        boxShadow: "0px 6px 5px rgba(255, 179, 188, 0.1)",
        borderRadius: theme.radius.lg,
        padding: theme.spacing.xs,
        marginBottom: theme.spacing.md
    },

}));

const WelcomeButton = () => {

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
            <Title size="h5">Title</Title>
            <Text fz="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate suscipit purus at dignissim. In blandit imperdiet vulputate. Suspendisse potenti. Cras ullamcorper at risus vel mattis. Ut semper at lacus et molestie.</Text>
        </UnstyledButton>
    )
}
export default WelcomeButton;
