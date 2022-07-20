import axios from "axios";
import { DEV_URL, BASE_URL } from "../Global";

export const getAdminData = () =>
  axios
    .get(`${BASE_URL}/admin/getAdminData`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

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

// client management api

export const deleteClient = (email) =>
  axios
    .delete(`${BASE_URL}/owner/delete?email=${email}`)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
