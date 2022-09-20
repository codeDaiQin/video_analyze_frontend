import { ListResponse, PaginationType, myRequest} from ".";
import { User } from "../interface/user";

// 用户请求的基本信息

export const reqUser = () => {
    let result = myRequest({
        url:"/getUserDetail",
        method:'get',
    })
    return result
}