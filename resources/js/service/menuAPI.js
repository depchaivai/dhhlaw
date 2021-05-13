import API from './api'
export const getAllmenu = async () => {
    const res = await API.get('/menu');
    return res.data;
}
