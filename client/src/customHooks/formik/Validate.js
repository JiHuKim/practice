import RegExpInfo from "./RegExpInfo";

const Vaildate = (values) => {

    let errors = {};

    const requiredMsg = "필수 입력 항목입니다.";

    const {
        userId,
        userPwd,
        userName,
        userEmail
    } = values;

    if(!userId){//아이디
        errors.userId = requiredMsg;
    } else if(userId.length > 10){
        errors.userId = RegExpInfo("ID").message;
    }

    if(!userPwd){//패스워드
        errors.userPwd = requiredMsg;
    } else if (!RegExpInfo("PASSWORD").regExp.test(userPwd)){
        errors.userPwd = RegExpInfo("PASSWORD").message;
    }

    if(!userName){//이름
        errors.userName = requiredMsg;
    }

    if(!userEmail){
        errors.userEmail = null;
    } else if(!RegExpInfo("EMAIL").regExp.test(userEmail)){//이메일
        errors.userEmail = RegExpInfo("EMAIL").message;
    }

    return errors;
}

export default Vaildate;