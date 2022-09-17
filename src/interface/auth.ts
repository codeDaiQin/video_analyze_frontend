import { ListResponse, PaginationType, myRequest } from ".";

// 用户请求的基本信息
export type UserInfo = {
    email: string;
    password: string | number | null;
    uid: string | number | null;
    code: string | number | null;//验证码
    name: string | null
};

export type UserRegisterRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "code">;//用于注册的参数设置
export type UserRegisterResponse = UserInfo//用于注册返回响应的参数设置
export type UserLoginRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "password">;//用于登录的参数设置
export type UserLoginResponse = { token : string; 
                                    user: Pick<UserInfo, "email"> & Pick<UserInfo, "uid"> & Pick<UserInfo, "name">
                                }//用于登录返回响应的参数设置


export type UserCodeResponse = Pick<UserInfo, "code"> //用于注册返回验证码的响应的参数设置


export type UserInfoRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "password">;//用于获取用户信息的参数设置

export const reqLogin = async (config: UserInfoRequest) => {
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
        method: 'get'
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
