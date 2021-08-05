import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCustomFormik from "../../customHooks/formik/ussCustomFormik";
import ValidationSchema from "../../customHooks/formik/ValidationSchema";

function SignUp() {

    const initialValues = {
        userId: '',
        userPwd: '',
        userName: '',
        userEmail: '',
        userPhone: ''
    };

    const location = useLocation();

    useEffect(() => {
        console.log('SignUp');
        console.log(location);
    }, [location])

    const formik = useCustomFormik(initialValues, ValidationSchema, "/signUp/suc");

    let { handleChange, handleSubmit, values, errors } = formik;

    let {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = values;

    return (
        <form method="post">
            <table className="myTable">
                <thead>
                    <tr>
                        <th>Sign Up</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="userId" value={userId} onChange={handleChange} placeholder="아이디를 입력해주세요." />
                            {errors.userId ? <p className="myValidation">{errors.userId}</p> : null}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" name="userPwd" value={userPwd} onChange={handleChange} placeholder="패스워드를 입력해주세요." />
                            {errors.userPwd ? <p className="myValidation">{errors.userPwd}</p> : null}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userName" value={userName} onChange={handleChange} placeholder="이름을 입력해주세요." />
                            {errors.userName ? <p className="myValidation">{errors.userName}</p> : null}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userEmail" value={userEmail} onChange={handleChange} placeholder="이메일을 입력해주세요." />
                            {errors.userEmail ? <p className="myValidation">{errors.userEmail}</p> : null}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userPhone" value={userPhone} onChange={handleChange} placeholder="연락처를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="userBtn" className="cmmBtn" type="button" value="회원가입" onClick={handleSubmit}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default SignUp;