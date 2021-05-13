import API from './api'
export const getAllpost = async () => {
    const res = await API.get('/post');
    return res.data;
}

export const getNewspost = async () => {
    const res = await API.get('/post/newsposts');
    return res.data;
}

export const getpost = async (e_namePost) => {
    const res = await API.get('/post/title/'+e_namePost);
    return res.data;
}

export const getposts = async (curent,pageNumber) => {
    const res = await API.get('/post/e-name/'+curent+'?page='+pageNumber);
    return res;
}
export const searchpost = async (searchKey) => {
    const res = await API.get('/post/search/'+searchKey);
    return res.data;
}
export const mostViews = async (similar) => {
    const res = await API.get('/post/mostViews/'+similar);
    return res.data;
}
export const getCmtCount = async (id) => {
    const res = await API.get('/post/commentcount/'+id);
    return res.data;
}
