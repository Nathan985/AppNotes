import Axios from 'axios';
import env from '../../../variables';

const getNotes = async (data) => {
    return await Axios({
        method: 'get',
        url: `${env.API_URL}/user/notes/${data}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data.data;
    }).catch(err => {
        console.log(err);
        return err
    })
}

export default getNotes