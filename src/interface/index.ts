// 分页
import Axios from "axios";


//请求用户信息的接口
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


//请求上传video的接口
export const requestVideo = Axios.create({
  baseURL: "/static",
  timeout: 5000
})

requestVideo.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Promise.reject(err)
  }
)

requestVideo.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    Promise.reject(err)
  }
)


//

export type PaginationType = {
  pageSize?: number;
};

// 列表response
export type ListResponse<T> = {
  total: number;
  list: T[];
};
