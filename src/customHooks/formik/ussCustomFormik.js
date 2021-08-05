import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const useCustomFormik = (initialValues, validation, path) => {

    let history = useHistory();

    const formik = useFormik({
        initialValues,
        validationSchema: validation,
        onSubmit : values => {
            history.push(path, values);
        }
    });

    return formik;
}

export default useCustomFormik;