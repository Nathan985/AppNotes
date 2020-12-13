import Axios from 'axios';

const RegisterUser = async (data) => {
    return await Axios({
        method: 'post',
        url: "http://localhost:3001/api/user/login",
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res.data.data);
        return res.data.data;
    }).catch(err => {
        console.log(err);
        return err
    })
}

export default RegisterUser