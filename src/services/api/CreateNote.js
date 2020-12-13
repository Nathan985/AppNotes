import Axios from 'axios';
import env from '../../../variables';

const CreateNote = async (data) => {

    return await Axios({
        method: 'post',
        data,
        url: `${env.API_URL}/notes/`,
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

export default CreateNote