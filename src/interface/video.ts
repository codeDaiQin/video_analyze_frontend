import { ListResponse, PaginationType} from ".";

// 用户请求的基本信息
export type reqTypeVideo = {
    pageSize: number,
    pageNum: number,
};

export type resTypeVideo = {
    authorName: string,
    authorUid: string,
    coin: number,
    collect: number,
    cover: string,
    createTime: number,
    desc: string,
    id: number,
    lastUpdateTime: number,
    like: number,
    pv: number,
    resource: string,
    status: number,
    title: string,
    uid: string
};

export type expandTypeVideo = {
    opcity: number
};

export type compounentTypeVideo = resTypeVideo & expandTypeVideo

export type upLoadVideo = {
    name: string;
};