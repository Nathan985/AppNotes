import Axios from 'axios';
import env from '../../../variables';

const UpdateOldNote = async (data, _id) => {

    return await Axios({
        method: 'patch',
        data,
        url: `${env.API_URL}/notes/${_id}`,
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

export default UpdateOldNote