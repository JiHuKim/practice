import * as Yup from 'yup';
import ErrorMsgInfo from './ErrorMsgInfo';
import RegExpInfo from './RegExpInfo';

const YupValdation = () => {

        /*
        아이디 글자수
        패스워드 특수문자
        이메일 형식
        Formik react 사용
        */

    return(
        Yup.object().shape({
            userId: Yup.string()
            .max(10, ErrorMsgInfo('ID'))
            .required(ErrorMsgInfo('REQUIRED')),

            userPwd: Yup.string()
            .matches(RegExpInfo('PASSWORD'), ErrorMsgInfo('PASSWORD'))
            .required(ErrorMsgInfo('REQUIRED')),

            userName: Yup.string()
            .required(ErrorMsgInfo('REQUIRED')),

            userEmail: Yup.string()
            .email(ErrorMsgInfo('EMAIL'))
            .required(ErrorMsgInfo('REQUIRED'))

        })
    );
}

export default YupValdation;