import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('').min(2, 'Must be at least 2 characters')
})