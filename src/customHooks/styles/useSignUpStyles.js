import { makeStyles } from '@material-ui/core/styles';

const useSignUpStyles = makeStyles(theme => ({
    root:{
        marginTop:"10%",
        width:"60%",
    },
    table:{
        "&>:nth-child(1)":{
            backgroundColor:"#6CCECB",
        },
        "&>:nth-child(1) h4":{
            color:"white",
        },
        "& td":{
            textAlign:"center",
        }

    },
    text:{
        width: "80%",
    },
    chkIcon:{
        margin: "0 5px",
    },
    touchIcon:{
        marginLeft: "10px",
    },    
    homeIcon:{
        marginRight: "5px",
    },    
    card:{
        marginTop:"10%",
        width:"40%",
        padding:"0",
        backgroundColor:"#FEF6EB",
        "& p":{
            marginTop:"10px",
        },
        "&>:nth-child(2)":{
            justifyContent:"flex-end",
        }

    },
}));

export default useSignUpStyles;