import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useStyles from "./styles";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  searchBar,
} from "@material-ui/core";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <CssBaseline />
        <AppBar
          position="relative"
          color="secondary"
          className={classes.appBar}
        >
          <Toolbar disableGutters>
            <CatchingPokemonIcon
              className={classes.icon}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pokédex Query
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <main className={classes.main}>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              Search for a Pokémon
            </Typography>
          </Container>
        </div>
        <div>
          <Container className={classes.searchBar} maxWidth="md" align="center">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="eg. Charizard"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
