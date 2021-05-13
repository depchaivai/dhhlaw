import API from './api'
export const getCmt = async (post_id) => {
    const res = await API.get('/post/comment/'+post_id);
    return res.data;
}
export const addCmt = async ({cmtdata}) => {
    await API.post('/comment',cmtdata);
}
