import * as Yup from "yup";

export const formSchema = Yup.object({
    Name : Yup.string().required('mandatory').min(2,'invalid').max(40,'invalid'),
    Address: Yup.string().required('mandatory').min(10,'invalid').max(40,'invalid'),
    Phone: Yup.string().required('mandatory').min(10,'invalid').max(10,'invalid'),
    Payment:Yup.string().required('mandatory')
})

export const formInitialValues = {
    Name : '',
    Address: '',
    Phone: '',
    Payment: ''
}