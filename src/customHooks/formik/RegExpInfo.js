
const RegExpInfo = props => {
    let regExp;

    let message;

        /*
        아이디 글자수
        패스워드 특수문자
        이메일 형식
        Formik react 사용
        */

    switch(props){
        case 'ID' : 
            regExp = null; message='아이디는 10자 이하로 작성해주세요.'; break;
        case 'PASSWORD' :
            regExp = /^(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/;
            message='패스워드는 특수문자 포함 8자 이상으로 작성해주세요.'; break;
        case 'NAME' : 
            regExp = /^[가-힣]+$/; message='이름은 한글만 입력가능합니다.'; break;
        case 'EMAIL' : 
            regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            message='이메일 형식이 올바르지 않습니다.'; break;
        case 'PHONE' :
            regExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
            message='연락처형식이 올바르지 않습니다. ex)000-0000-0000'; break;
        default : regExp = null;
    }

    return {regExp: regExp, message: message};
}

export default RegExpInfo;