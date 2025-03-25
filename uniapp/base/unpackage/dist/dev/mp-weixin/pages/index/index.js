"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  cardVue();
}
const cardVue = () => "../../components/card/card.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goods = [
      {
        img: "https://imgservice.suning.cn/uimg1/b2c/image/EyKkRZASTNRixkYIFpRuCg.jpg_800w_800h_4e",
        title: "Huawei/华为 Mate 60 Pro",
        price: "6999.00",
        marketPrice: "￥6999.00"
      },
      {
        img: "https://zkres1.myzaker.com/202402/65d0c3fb8e9f0942e22d0183_1024.jpg",
        title: "Xiaomi/小米 14 Ultra",
        price: "5499.00",
        marketPrice: "￥5499.00"
      },
      {
        img: "https://img0.baidu.com/it/u=330042172,3862514325&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        title: "Samsung/三星 Galaxy S23 Ultra",
        price: "7999.00",
        marketPrice: "￥7999.00"
      },
      {
        img: "https://ecmb.bdimg.com/tam-ogel/-1000279508_-1015360985_1920_960.jpg",
        title: "OPPO Find X6 Pro",
        price: "5999.00",
        marketPrice: "￥5999.00"
      },
      {
        img: "https://ecmb.bdimg.com/tam-ogel/-2046205545_-2075875968_722_428.jpg",
        title: "vivo S19",
        price: "5499.00",
        marketPrice: "￥5499.00"
      }
    ];
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:51", "首页挂载完毕");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods, (item, index, i0) => {
          return {
            a: "49715872-0-" + i0,
            b: common_vendor.p({
              imgSrc: item.img,
              title: item.title,
              price: item.price,
              marketPrice: item.marketPrice
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
