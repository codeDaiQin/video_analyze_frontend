// 分页
import Axios from "axios";

//请求用户信息的接口
export const myRequest = Axios.create({
  baseURL: "/api/v1",
  timeout: 5000,
  headers: {
    token: ''
  }
})

//请求拦截，根据api接口自动添加前缀
function urlHelper(url: string) {
  const authReg = new RegExp('\/login|\/register|\/code|\/forgetPassWord')
  const videoReg = new RegExp('\/upload') //new RegExp('\/upload')
  const userReg = new RegExp('\/detail')
  // console.log(url);
  // const authArray = ['/login','/register','/code','/forgetPassWord']
  // const videoArray = ['/upload']
  // const userArray = ['/getUserDetail']

  if (authReg.test(url)) {
    return "/auth" + url
  }
  else if (videoReg.test(url)) {
    return url
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
    if (localStorage.getItem('token')) {
      config.headers!.token = localStorage.getItem('token') as string
    }
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
