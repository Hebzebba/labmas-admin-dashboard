import axios from "axios";
import { DEV_URL, BASE_URL } from "../Global";

// Admin controller
export const getAdminData = () =>
  axios
    .get(`${BASE_URL}/admin-all`)
    .then((res) => res.data)
    .catch((err) => err);

export const addAdminData = (
  admin,
  adminPassword,
  adminUserEmail,
  adminUserName,
  contact
) =>
  axios
    .post(`${BASE_URL}/admin-add`, {
      admin,
      adminPassword,
      adminUserEmail,
      adminUserName,
      contact,
    })
    .then((res) => res.data)
    .catch((error) => error);

export const deleteAdmin = (email) =>
  axios
    .delete(`${BASE_URL}/admin/delete?email=${email}`)
    .then((res) => res.data)
    .catch((error) => error);

export const fetchData = () =>
  axios
    .get(`${BASE_URL}/orders`)
    .then((res) => res.data)
    .catch((err) => err);

export const addLaundryOwner = (
  fullName,
  email,
  contact,
  date,
  laundryName,
  info,
  longitude,
  latitude
) =>
  axios
    .post(`${BASE_URL}/owner/register`, {
      fullName,
      email,
      contact,
      date,
      laundryName,
      info,
      longitude,
      latitude,
    })
    .then((res) => res.data)
    .catch((err) => err);

export const getLaundryInfo = () =>
  axios
    .get(`${BASE_URL}/owners`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const updateClient = (email, contact, fullName, laundryName) =>
  axios
    .put(`${BASE_URL}/owner/update`, {
      email: email,
      contact: contact,
      fullName: fullName,
      laundryName: laundryName,
    })
    .then((res) => res.data)
    .catch((err) => err);

// client management api

export const deleteClient = (email) =>
  axios
    .delete(`${BASE_URL}/owner/delete?email=${email}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
