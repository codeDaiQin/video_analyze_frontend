import { myRequest} from ".";
import { Video, upLoadVideo} from "../interface/video";


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