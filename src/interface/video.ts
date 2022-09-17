import { ListResponse, PaginationType, myRequest} from ".";

// 用户请求的基本信息
export type Video = {
    name: string;
};

export type upLoadVideo = {
    name: string;
};

export const reqVideo = (config : Video) => {
    let result = myRequest({
        url:"/video",
        method:'get',
        params:{
            name : config.name
        }
    })
    return result
}

export const reqUploadVideo = () => {
    let result = myRequest({
        url:"/upload",
        method:'get',
    })
    return result
}