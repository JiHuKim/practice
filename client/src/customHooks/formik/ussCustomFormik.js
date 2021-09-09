import axios from 'axios';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const useCustomFormik = (initialValues, validation, path) => {

    let history = useHistory();

    const formik = useFormik({
        initialValues,
        validationSchema: validation,
        onSubmit : values => {
            axios.post("sign/up", values)
            .then(res => {
                history.push(path, values);
            })
            .catch(err => {
                console.log(err);
            })
        }
    });

    return formik;
}

export default useCustomFormik;