import axios from 'axios';

const API = axios.create({
	baseURL: 'http://usia.co.kr/api',
  withCredentials: true,
});

/* Notice */
export const createNotice = fd => API.post(`/board/create`, fd);
export const readNotice = boardId => API.get(`/board/${boardId}`);
export const readNoticeList = () => API.get(`/board`);
export const updateNotice = ({ boardId, title, content }) =>
  API.post(`/board/update`, { boardId, title, content });
export const deleteNotice = boardId => API.post(`/board/remove`, { boardId });

/* Consult */
export const createConsult = fd => API.post(`/consult/create`, fd);
export const readConsult = boardId => API.get(`/consult/${boardId}`);
export const readConsultList = () => API.get(`/consult`);

/* Admin */
export const login = ({ uid, pw }) => API.post(`/login`, { uid, pw });
export const check = () => API.get(`/check`);
export const readAdminInfo = () => API.get(`/admin`);
export const changeAdminInfo = ({ repName, name, tel, addr, email }) =>
  API.post(`/update`, { repName, name, tel, addr, email });

export const readInfo = () => API.get(`/read`);
export const fileDownload = sid => API.post(`/down/${sid}`);
