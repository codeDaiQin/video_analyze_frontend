// 分页
import Axios from "axios";

export const requestUser = Axios.create({
  baseURL: "/api",
  timeout: 5000
})

requestUser.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Promise.reject(err)
  }
)

requestUser.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    Promise.reject(err)
  }
)



export type PaginationType = {
  pageSize?: number;
};

// 列表response
export type ListResponse<T> = {
  total: number;
  list: T[];
};
