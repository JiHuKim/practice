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

    const {
        userId,
        userPwd,
        userName,
        userEmail,
        userPhone
    } = txt;

    const onSubmit = useSubmit("/signUp/suc");

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
                            <input type="text" name="userId" value={userId} onChange={onChange} placeholder="아이디를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" name="userPwd" value={userPwd} onChange={onChange} placeholder="패스워드를 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userName" value={userName} onChange={onChange} placeholder="이름을 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userEmail" value={userEmail} onChange={onChange} placeholder="이메일을 입력해주세요." />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userPhone" value={userPhone} onChange={onChange} placeholder="연락처를 입력해주세요." />
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