import axios from "axios";
import { BASE_URL } from "../Global";

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
      longitude,
      latitude,
    })
    .then((res) => res.data)
    .catch((err) => err);
