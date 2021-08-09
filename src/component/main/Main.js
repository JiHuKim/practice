import { AppBar, Button, IconButton, Tab, Tabs, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useSubmit from "../../customHooks/useSubmit";
import MenuIcon from '@material-ui/icons/Menu';
import useMainStyles from "../../customHooks/styles/useMainStyles";

function Main() {

    const goSignUp = useSubmit({ path: "/signUp" });

    const classes = useMainStyles();

    return (
        <AppBar position="fixed">
            {/* <Tabs>
                <Tab icon={<HomeRoundedIcon />} aria-label="Home"/>
                <Tab label="Sign Up" onClick={goSignUp}/>
            </Tabs> */}
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    className={classes.title}
                >
                    Home
                </Typography>
                <Button
                    color="inherit"
                    onClick={goSignUp}
                >
                    Sign Up
                </Button>
            </Toolbar>

            {/* <input type="button" value="Sign Up" className="cmmBtn" onClick={goSignUp}/> */}
        </AppBar>
    );

}

export default Main;