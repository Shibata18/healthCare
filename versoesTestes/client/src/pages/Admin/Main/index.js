import React from 'react';
import { Grid, Container, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar'
const useStyles = makeStyles((theme) => ({

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    root: {
        maxWidth: 345,
        minWidth: 275,
    },
    media: {
        height: 140,
    },
    title: {
        fontSize: 14,
    },
}));

const Example = (props) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Profissionais    </Typography>
                                    <Typography variant="h1" component="h2"> 4    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Pacientes        </Typography>
                                    <Typography variant="h1" component="h2"> 2   </Typography>
                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Atendimentos    </Typography>
                                    <Typography variant="h1" component="h2">
                                        6    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Dados Estáticos e ficticios
    </Typography>
                                    <Typography variant="h1" component="h2">
                                        3
    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default Example;