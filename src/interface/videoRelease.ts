import { ListResponse, PaginationType, requestVideo } from ".";

export const reqReleaseVideo = (config : File[]) => {
    // let params = new URLSearchParams()
    // console.log(config.userName);
    // params.append('phone',config.userName)
    // params.append('password',config.userPassword as string)
    // console.log(params);
    
    let result = requestVideo({
        url:"/",
        method:'post',
        data:config
    })
    return result
}