import { Button, Card, CardActions, CardContent, Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import useSignUpStyles from "../../customHooks/styles/useSignUpStyles";
import useSubmit from "../../customHooks/useSubmit";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

function SignUpSuc() {

    const location = useLocation();

    const {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = location.state;

    useEffect(() => {
        console.log('suc');
        console.log(location);
        console.log(location.state);
    }, [location])

    const classes = useSignUpStyles();

    const onSubmit = useSubmit({path:'/'});

    return (
        <Container
            component={Card}
            className={classes.card}
        >
            <CardContent>
                <Typography variant="h5" component="h1">
                    <CheckIcon className={classes.chkIcon} />
                    회원 가입 완료
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                >
                    아이디 : {userId}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                >
                    패스워드 : {userPwd}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                >
                    이름 : {userName}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                >
                    이메일 : {userEmail}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                >
                    연락처 : {userPhone}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={onSubmit}
                >
                    <HomeRoundedIcon className={classes.homeIcon}/>
                    Go Home
                </Button>
            </CardActions>
        </Container>
    );
}

export default SignUpSuc;