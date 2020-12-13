import Axios from 'axios';
import env from '../../../variables'

const SignInUser = async (data) => {
    return await Axios({
        method: 'post',
        url: `${env.API_URL}/user/login`,
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data.data;
    }).catch(err => {
        return false
    })
}

export default SignInUser