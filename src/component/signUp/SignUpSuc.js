import { useEffect } from "react";

function SignUpSuc(){

    useEffect(() => {
        console.log('suc');
    }, [])

    return(
        <>
            <h1>회원가입 완료 정보</h1>
            <ul className="myUl">
                <li>
                    <label>아이디 : </label>
                    <span></span>
                </li>
                <li>
                    <label>패스워드 : </label>
                    <span></span>
                </li>
                <li>
                    <label>이름 : </label>
                    <span></span>
                </li>
                <li>
                    <label>이메일 : </label>
                    <span></span>
                </li>
                <li>
                    <label>연락처 : </label>
                    <span></span>
                </li>
            </ul>
        </>
    );
}

export default SignUpSuc;