"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "card",
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    marketPrice: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.imgSrc,
        b: common_vendor.t(__props.title),
        c: common_vendor.t(__props.price),
        d: common_vendor.t(__props.marketPrice)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/card/card.js.map
