export const prepareHeaders = (headers: Headers) => { // , { getState, endpoint }
    const token = localStorage.getItem('token') as string

    if (token !== '') {
        headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
};
