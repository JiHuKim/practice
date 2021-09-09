
const ErrorMsgInfo = props => {
    let message;

    switch(props){
        case 'REQUIRED' :
            message='필수 입력 항목입니다.'; break;
        case 'ID' : 
            message='아이디는 10자 이하로 작성해주세요.'; break;
        case 'PASSWORD' :
            message='패스워드는 특수문자 포함 8자 이상으로 작성해주세요.'; break;
        case 'NAME' : 
            message='이름은 한글만 입력가능합니다.'; break;
        case 'EMAIL' :
            message='이메일 형식이 올바르지 않습니다.'; break;
        case 'PHONE' :
            message='연락처형식이 올바르지 않습니다. ex)000-0000-0000'; break;
        default :
            message = '알 수 없는 오류입니다.';
    }

    return message;
}

export default ErrorMsgInfo;