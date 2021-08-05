import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useRegExp from "../../customHooks/useRegExp";
import useSubmit from "../../customHooks/useSubmit";
import useText from "../../customHooks/useText";

function SignUp() {

    const [txt, onChange] = useText({
        userId: '',
        userPwd: '',
        userName: '',
        userEmail: '',
        userPhone: ''
    });

    let {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = txt;

    const onBlur = useRegExp();

    const location = useLocation();

    useEffect(() => {
        console.log('SignUp');
        console.log(location);
    }, [location])

    const onSubmit = useSubmit({path:"/signUp/suc", state:txt});

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
                            <input type="text" name="userId" value={userId} onChange={onChange} onBlur={onBlur} placeholder="아이디를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" name="userPwd" value={userPwd} onChange={onChange} placeholder="패스워드를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userName" value={userName} onChange={onChange} onBlur={onBlur} placeholder="이름을 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userEmail" value={userEmail} onChange={onChange} onBlur={onBlur} placeholder="이메일을 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userPhone" value={userPhone} onChange={onChange} onBlur={onBlur} placeholder="연락처를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="cmmBtn" type="button" value="회원가입" onClick={onSubmit}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default SignUp;