import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useCustomFormik from "../../customHooks/formik/ussCustomFormik";
import YupValdation from "../../customHooks/formik/YupValdation";

function SignUp() {

    const location = useLocation();
    
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

    const formik = useCustomFormik(initialValues, YupValdation, "/signUp/suc");

    let { handleChange, handleSubmit, values, errors, touched } = formik;

    let {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = values;

    return (
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
                            {(errors.userId && touched.userId) && <p className="myValidation">{errors.userId}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" name="userPwd" value={userPwd} onChange={handleChange} placeholder="패스워드를 입력해주세요." />
                            {(errors.userPwd && touched.userPwd) && <p className="myValidation">{errors.userPwd}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userName" value={userName} onChange={handleChange} placeholder="이름을 입력해주세요." />
                            {(errors.userName && touched.userName) && <p className="myValidation">{errors.userName}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userEmail" value={userEmail} onChange={handleChange} placeholder="이메일을 입력해주세요." />
                            {(errors.userEmail && touched.userEmail) && <p className="myValidation">{errors.userEmail}</p>}
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
    );
}

export default SignUp;