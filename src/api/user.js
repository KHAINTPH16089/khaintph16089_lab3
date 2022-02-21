import instance from './instance';

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
}
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
}
export const getAll = () => {
    const url = "/user";
    return instance.get(url);
}
export const get = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/user`;
    return instance.post(url, post);
}
export const remove = (id) => {
    const url = `/user/${id}`;
    return instance.delete(url);
}
export const update = (post) => {
    const url = `/user/${post.id}`;
    return instance.put(url, post);
}