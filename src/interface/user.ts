import { ListResponse, PaginationType, myRequest} from ".";

// 用户请求的基本信息
export type User = {
    name: string;
    email: string;
    uid: string
};

export const reqUser = () => {
    let result = myRequest({
        url:"/getUserDetail",
        method:'get',
    })
    return result
}