import * as Yup from 'yup';
import RegExpInfo from './RegExpInfo';

const ValidationSchema = () => {

    const requiredMsg = '필수 입력 항목입니다.';

    return(
        Yup.object().shape({
            userId: Yup.string()
            .max(10, RegExpInfo('ID').message)
            .required(requiredMsg),

            userPwd: Yup.string()
            .matches(RegExpInfo('PASSWORD').regExp, RegExpInfo('PASSWORD').message)
            .required(requiredMsg),

            userName: Yup.string()
            .required(requiredMsg),

            userEmail: Yup.string()
            .email(RegExpInfo('EMAIL').message)
            .required(requiredMsg)

        })
    );
}

export default ValidationSchema;