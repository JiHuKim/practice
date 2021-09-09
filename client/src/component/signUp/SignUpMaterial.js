import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCustomFormik from "../../customHooks/formik/ussCustomFormik";
import YupValidation from "../../customHooks/formik/YupValidation";
import TextField from '@material-ui/core/TextField';
import useSignUpStyles from "../../customHooks/styles/useSignUpStyles";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@material-ui/core";
import TouchAppIcon from '@material-ui/icons/TouchApp';

function SignUpMaterial() {

    const location = useLocation();

    const classes = useSignUpStyles();

    useEffect(() => {
        console.log('SignUp');
        console.log(location);
    }, [location])

    const initialValues = {
        userId: '',
        userPwd: '',
        userName: '',
        userEmail: '',
        userPhone: ''
    };

    const formik = useCustomFormik(initialValues, YupValidation, "/signUp/suc");

    let { handleChange, handleSubmit, values, errors, touched } = formik;

    let {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = values;

    return (
        <TableContainer component={Paper} className={classes.root} elevation={3}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography
                                variant="h4"
                            >
                                Sign Up
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField
                                className={classes.text}
                                variant="outlined"
                                required
                                label="ID"
                                name="userId"
                                value={userId}
                                onChange={handleChange}
                                placeholder="아이디를 입력해주세요."
                                error={(errors.userId && touched.userId) && true}
                                helperText={(errors.userId && touched.userId) && errors.userId}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                className={classes.text}
                                variant="outlined"
                                required
                                label="PASSWORD"
                                type="password"
                                name="userPwd"
                                value={userPwd}
                                onChange={handleChange}
                                placeholder="패스워드를 입력해주세요."
                                error={(errors.userPwd && touched.userPwd) && true}
                                helperText={(errors.userPwd && touched.userPwd) && errors.userPwd}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                className={classes.text}
                                variant="outlined"
                                required
                                label="NAME"
                                name="userName"
                                value={userName}
                                onChange={handleChange}
                                placeholder="이름을 입력해주세요."
                                error={(errors.userName && touched.userName) && true}
                                helperText={(errors.userName && touched.userName) && errors.userName}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                className={classes.text}
                                variant="outlined"
                                required
                                type="email"
                                label="EMAIL"
                                name="userEmail"
                                value={userEmail}
                                onChange={handleChange}
                                placeholder="이메일을 입력해주세요."
                                error={(errors.userEmail && touched.userEmail) && true}
                                helperText={(errors.userEmail && touched.userEmail) && errors.userEmail}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                className={classes.text}
                                variant="outlined"
                                label="PHONE"
                                name="userPhone"
                                value={userPhone}
                                onChange={handleChange}
                                placeholder="연락처를 입력해주세요."
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleSubmit}
                                size="large"
                            >
                                회원가입
                                <TouchAppIcon
                                    fontSize="small"
                                    className={classes.touchIcon}
                                />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default SignUpMaterial;