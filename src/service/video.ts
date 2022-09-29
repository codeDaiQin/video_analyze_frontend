import { myRequest} from ".";
import { reqTypeVideo,resTypeVideo} from "../interface/video";


export const reqVideo = async  (config: reqTypeVideo) => {
    let result = await myRequest.request<resTypeVideo[],any>({
        url:"/video",
        method:'get',
        params:{
            pageSize: config.pageSize,
            pageNum: config.pageNum,
        }
    })
    return result.data
}
