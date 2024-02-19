import { redirect } from "react-router-dom";

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
} 

export const tokenLoader = () => {
    return getToken();
}

export const authLoader = () => {
    const token = getToken();
    if(!token) {
        return redirect('/');
    }
    return token;
}