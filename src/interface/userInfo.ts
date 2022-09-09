import { ListResponse, PaginationType, requestUser } from ".";

// 商品基本信息
export type UserInfo = {
    userName: string;
    userPassword : string | number;
    userId: string | number;
    verify: string | number;//验证码
  };
  
export type UserInfoRequest = Pick<UserInfo, "userName"> & Pick<UserInfo, "userPassword">;

export const reqLogin = (config : UserInfoRequest) => {
    // let params = new URLSearchParams()
    // console.log(config.userName);
    // params.append('phone',config.userName)
    // params.append('password',config.userPassword as string)
    // console.log(params);
    
    let result = requestUser({
        url:"/user/passport/login",
        method:'post',
        data:{'phone':config.userName,'password' : config.userPassword as string}
    })
    return result
}