import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SignUpSuc(){

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

    return(
        <>
            <h1>회원가입 완료 정보</h1>
            <ul className="myUl">
                <li>
                    <label>아이디 : </label>
                    <span>{userId}</span>
                </li>
                <li>
                    <label>패스워드 : </label>
                    <span>{userPwd}</span>
                </li>
                <li>
                    <label>이름 : </label>
                    <span>{userName}</span>
                </li>
                <li>
                    <label>이메일 : </label>
                    <span>{userEmail}</span>
                </li>
                <li>
                    <label>연락처 : </label>
                    <span>{userPhone}</span>
                </li>
            </ul>
        </>
    );
}

export default SignUpSuc;