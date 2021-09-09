
const RegExpInfo = props => {
    let regExp;

    switch(props){
        case 'ID' : 
            regExp = null; break;
        case 'PASSWORD' :
            regExp = /^(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/; break;
        case 'NAME' : 
            regExp = /^[가-힣]+$/; break;
        case 'EMAIL' : 
            regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; break;
        case 'PHONE' :
            regExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/; break;
        default : regExp = null;
    }

    return regExp;
}

export default RegExpInfo;