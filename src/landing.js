import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LogoRed from './assets/logo-red.png';
import LogoBlue from './assets/logo-blue.png';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logoRed: {
    width:42,
    height:22
  },
  logoBlue: {
    width:42,
    height:22
  },
  back:{ 
    backgroundColor : 'white'
  }
}));

const cards = [1, 2, 3];

export default function Album({ onToggleDark, onToggleLight, CurrentState }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color={(CurrentState) ? "secondary" : "primary"}>
        <Toolbar>
           <img
             alt="logo" 
             src={ (CurrentState) ? LogoBlue : LogoRed } 
             className={ (CurrentState) ? classes.logoBlue : classes.logoRed }/>                
          <Typography variant="h6" color="inherit" noWrap>          
            Configurable Front-End
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Simple App
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              I have built a simple app that will change the UI layout by clicking on one of the two buttons below. Please try it out:
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"   onClick={onToggleDark}>
                    Dark
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.back} variant="outlined" color="primary"  onClick={onToggleLight}>
                    Light
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card for random images have been embedded using Unsplash API.
                    </Typography>
                  </CardContent>                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          App Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Built by Marwan Grada
        </Typography>        
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
