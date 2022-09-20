// 分页
import Axios from "axios";

//请求用户信息的接口
export const myRequest = Axios.create({
  baseURL: "/api/v1",
  timeout: 5000
})

//请求拦截，根据api接口自动添加前缀
function urlHelper(url: string) {
  const authReg = new RegExp('\/login|\/register|\/code|\/forgetPassWord')
  const videoReg = new RegExp('\/upload')
  const userReg = new RegExp('\/getUserDetail')
  // console.log(url);
  // const authArray = ['/login','/register','/code','/forgetPassWord']
  // const videoArray = ['/upload']
  // const userArray = ['/getUserDetail']


  if (authReg.test(url)) {
    return "/auth" + url
  }
  else if (videoReg.test(url)) {
    return "/video" + url
  }
  else if (userReg.test(url)) {
    return "/user" + url
  }
  else {
    return url
  }
}

myRequest.interceptors.request.use(
  config => {
    config.url = urlHelper(config.url!)  
    return config
  },
  err => {
    Promise.reject(err)
    return err.response.data.message
  }
)

myRequest.interceptors.response.use(
  res => {
    return res.data
  },
  async err => {
    Promise.reject(err)
    return err.response.data.message
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
