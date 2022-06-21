import axios from "axios";
import { DEV_URL, BASE_URL } from "../Global";

export const getAdminData = () =>
  axios
    .get(`${DEV_URL}/admin/getAdminData`)
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
    .post(`${DEV_URL}/owner/register`, {
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
    .get(`${DEV_URL}/owners`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
