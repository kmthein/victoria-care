import { redirect } from "react-router-dom";

export const getAdminToken = () => {
    const adminToken = localStorage.getItem('admin-token');
    return adminToken;
} 

export const adminTokenLoader = () => {
    return getAdminToken();
}

export const adminAuthLoader = () => {
    const adminToken = getAdminToken();
    if(!adminToken) {
        return redirect('/login');
    }
    return adminToken;
}