import { ListResponse, PaginationType } from ".";

// 商品类型
export enum GoodsType {
  all = "0", // 全部
  calligraphy = "1", // 书法
  sealCutting = "2", // 篆刻
  gift = "3", // 礼品
  other = "4", // 其他
}

// 书法商品规格
export type CalligraphySpecsType = {
  size: "big" | "samll"; // 尺寸
};

// 篆刻商品规格
export type SealCuttingSpecsType = {
  typeface: string; // 字体
};

// 商品规格信息
export type SpecsType = CalligraphySpecsType | SealCuttingSpecsType;

// 商品基本信息
export type GoodsBaseInfo = {
  goods_id: string;
  goods_type: GoodsType;
  goods_name: string;
  covers: string[]; // 封面图
};

// 商品详情信息
export type GoodsDetailInfo = {
  price: number; // 价格
  specs: []; // 规格
} & GoodsBaseInfo;

// 商品详情请求
export type GoodsDetailRequest = Pick<GoodsBaseInfo, "goods_id">;

// 商品详情响应
export type GoodsDetailResponse = GoodsDetailInfo;

// 商品列表请求
export type GoodsListRequest = Pick<GoodsBaseInfo, "goods_type"> &
  PaginationType;

// 商品列表响应
export type GoodsListResponse = ListResponse<GoodsBaseInfo>;
