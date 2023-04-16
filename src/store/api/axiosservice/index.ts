import axios from "axios";
import endpoints from "./endpoints";

const
  service = axios.create({
    headers: {
      Authorization: "nWlsY48kPQOCJ1ZKL2dbVjISxchtEr6X3myFA5zguoU9i7faRe"
    },
    baseURL: endpoints.base
  });

export default service;