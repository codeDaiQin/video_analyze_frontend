import { ListResponse, PaginationType, requestUser } from ".";

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


export type UserInfoRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "password">;//用于登陆的参数设置

export const reqLogin = async (config: UserInfoRequest) => {
    let result = await requestUser.request<UserLoginResponse,any>({
        url: "/v1/auth/login",
        method: 'post',
        data: { 'email': config.email, 'password': config.password as string }
    })
    return result
}


export const reqRegister =async (config:  UserRegisterRequest) => {
    let result = await requestUser.request<UserRegisterResponse,any>({
        url: "/v1/auth/register",
        method: 'post',
        data: { 'email': config.email, 'code': config.code as string }
    })
    return result
}

export const reqHello = () => {
    let result = requestUser({
        url: "/v1",
        method: 'post',
        data: { 'name': 'string', 'age': 1 , 'role' : 'guest'}
    })
    return result
}


export const reqCode = async (email : Pick<UserInfo, "email"> | string) => {
    //request<UserCodeResponse,any>第一个参数指定response的数据格式带有code，否则调用函数时会报没有携带code属性
    let result = await requestUser.request<UserCodeResponse,any>({
        url: `/v1/auth/code/${email}`,
        method: 'get'
    })
    return result    
}