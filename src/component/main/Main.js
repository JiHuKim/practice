import { AppBar, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useSubmit from "../../customHooks/useSubmit";
import MenuIcon from '@material-ui/icons/Menu';
import useMainStyles from "../../customHooks/styles/useMainStyles";
import axios from "axios";

function Main() {

    const goSignUp = useSubmit({ path: "/signUp" });

    const [hello, setHello] = useState('');

    const classes = useMainStyles();

    useEffect(() => {
        axios.get("http://localhost:8080/api/home/hello")
        .then(res => {
            console.log(res);
            setHello(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <>
        <AppBar position="sticky">
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
        <Container>
            <Typography variant="h6">
                {hello}
            </Typography>
        </Container>
        </>
    );

}

export default Main;