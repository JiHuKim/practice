import { ErrorMessage, Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import YupValidation from "../../customHooks/formik/YupValidation";

function SignUpFormik() {
    
    let history = useHistory();

    const initialValues = {
        userId: '',
        userPwd: '',
        userName: '',
        userEmail: '',
        userPhone: ''
    };

    return (
        
        <Formik
            initialValues={initialValues}
            validationSchema={YupValidation}
            onSubmit={ values =>{
                history.push("/signUp/suc", values);
            }}
        >
            <Form>
            <table className="myTable">
                <thead>
                    <tr>
                        <th>Sign Up</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Field name="userId" type="text" placeholder="아이디를 입력해주세요."/>
                            <ErrorMessage name="userId" component="p" className="myValidation"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Field name="userPwd" type="password" placeholder="패스워드를 입력해주세요."/>
                            <ErrorMessage name="userPwd" component="p" className="myValidation"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Field name="userName" type="text" placeholder="이름을 입력해주세요."/>
                            <ErrorMessage name="userName" component="p" className="myValidation"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Field name="userEmail" type="email" placeholder="이메일을 입력해주세요."/>
                            <ErrorMessage name="userEmail" component="p" className="myValidation"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Field name="userPhone" type="text" placeholder="연락처를 입력해주세요."/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="userBtn" className="cmmBtn" type="submit" value="회원가입"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            </Form>
        </Formik>
    );
}

export default SignUpFormik;