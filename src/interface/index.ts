// 分页
import Axios from "axios";

//请求用户信息的接口
export const requestAuth = Axios.create({
  baseURL: "/api/v1/auth",
  timeout: 5000
})

requestAuth.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

requestAuth.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
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
