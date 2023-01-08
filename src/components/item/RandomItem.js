import {createStyles, Flex, Title, Text} from '@mantine/core';
import RetroButton from "../RetroButton";

const useStyles = createStyles((theme) => ({

    section : {
        flex: 1,
        border: '2px solid #B8D1CD',
        borderRadius: 20,
        paddingTop: theme.spacing.lg,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.md
    },

    title : {
        marginBottom: theme.spacing.md
    }
}));

const RandomItem = () => {

    const { classes} = useStyles();

    return(
        <Flex direction="column" align="center" className={classes.section}>
            <Title size="h2" className={classes.title}>Title</Title>
            <Text fz="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate suscipit purus at dignissim. In blandit imperdiet vulputate. Suspendisse potenti. Cras ullamcorper at risus vel mattis. Ut semper at lacus et molestie.
            </Text>
            <RetroButton label={"Let's go !"} linkTo={"/cocktail"}/>
        </Flex>
    )
}
export default RandomItem;
