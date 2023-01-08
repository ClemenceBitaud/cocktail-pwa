import {createStyles, Flex, Title, Text} from '@mantine/core';
import RetroButton from "../RetroButton";

const useStyles = createStyles((theme) => ({

    section: {
        flex: 2,
        marginRight: theme.spacing.xl,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginBottom: theme.spacing.xl,
            marginRight: 0
        },
    },

    title : {
        marginBottom: theme.spacing.md
    }
}));

const WelcomeItem = () => {

    const { classes} = useStyles();

    return(
        <Flex direction="column" align={{ base: 'center', md:'flex-start'}} className={classes.section}>
            <Title size="h1" className={classes.title}>Title</Title>
            <Text fz="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate suscipit purus at dignissim. In blandit imperdiet vulputate. Suspendisse potenti. Cras ullamcorper at risus vel mattis. Ut semper at lacus et molestie.
            </Text>
            <RetroButton label={"Find a cocktail"} linkTo={"/cocktail"}/>
        </Flex>
    )
}
export default WelcomeItem;
