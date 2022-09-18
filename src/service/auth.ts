import { ListResponse, PaginationType, myRequest } from ".";
import { UserInfo, UserRegisterRequest, UserRegisterResponse, UserLoginRequest, UserLoginResponse, UserInfoRequest, UserCodeResponse} from "../interface/auth";

export const reqLogin = async (config: UserInfoRequest | UserRegisterRequest) => {
    let result = await myRequest.request<UserLoginResponse,any>({
        url: "/login",
        method: 'post',
        data: config
    })
    return result
}


export const reqRegister =async (config:  UserRegisterRequest) => {
    let result = await myRequest.request<UserRegisterResponse,any>({
        url: "/register",
        method: 'post',
        data: config
    })
    return result
}

export const reqHello = () => {
    let result = myRequest({
        method: 'post',
        data: { 'name': 'string', 'age': 1 , 'role' : 'guest'}
    })
    return result
}


export const reqCode = async (config : Pick<UserInfo, "email">) => {
    //request<UserCodeResponse,any>第一个参数指定response的数据格式带有code，否则调用函数时会报没有携带code属性
    let result = await myRequest.request<UserCodeResponse,any>({
        url: `/code/${config.email}`,
        method: 'get',
    })
    return result    
}


export const reqforgetPassWord = async (email : Pick<UserInfo, "email">) => {
    //request<UserCodeResponse,any>第一个参数指定response的数据格式带有code，否则调用函数时会报没有携带code属性
    let result = await myRequest.request<UserCodeResponse,any>({
        url: '/forgetPassWord',
        method: 'post'
    })
    return result    
}
