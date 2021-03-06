import { useCallback } from "react";

function useRegExp(){

    const onBlur = useCallback(e => {
        const {name, value} = e.target;

        let regExp;

        let message;

        /*
        아이디 글자수
        패스워드 특수문자
        이메일 형식
        Formik react 사용
        */
        switch(name){
            case 'userId' : 
                regExp = null; message='아이디는 10글자 이하로 작성해주세요.'; break;
            // case 'userPwd' : regExp = /^ $/; break;
            case 'userName' : 
                regExp = /^[가-힣]+$/; message='이름은 한글만 입력가능합니다.'; break;
            case 'userEmail' : 
                regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                message='이메일 형식이 올바르지 않습니다.'; break;
            case 'userPhone' :
                regExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
                message='연락처형식이 올바르지 않습니다. ex)000-0000-0000'; break;
            default : regExp = null;
        }

        if(!regExp.test(value) && value !=='') {
            alert(message);
        }
    }, [])

    return onBlur;

}

export default useRegExp;