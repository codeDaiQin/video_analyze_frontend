// 用户请求的基本信息
export type UserInfo = {
    email: string;
    password: string;
    uid: string;
    code: string;//验证码
    name: string
};

export type UserRegisterRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "code">;//用于注册的参数设置
export type UserRegisterResponse = UserInfo//用于注册返回响应的参数设置
export type UserLoginRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "password">;//用于登录的参数设置
export type UserLoginResponse = { token : string; 
                                    user: Pick<UserInfo, "email"> & Pick<UserInfo, "uid"> & Pick<UserInfo, "name">
                                }//用于登录返回响应的参数设置


export type UserCodeResponse = Pick<UserInfo, "code"> //用于注册返回验证码的响应的参数设置


export type UserInfoRequest = Pick<UserInfo, "email"> & Pick<UserInfo, "password">;//用于获取用户信息的参数设置