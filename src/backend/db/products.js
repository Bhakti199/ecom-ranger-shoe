import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product9_a5aiu9Amd.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654108981",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model9_Oh9hTgpxE8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654103792",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/1-1_n0zr8v.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913099/1-2_wkqt5o.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/1-3_rxsif3.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913099/1-4_hxb7gc.webp",
    productBrand: "Puma",
    categoryName: "Women, Best Sellers, New Arrivals",
    productDetail: "Fire run running shoes for men",
    originalPrice: 4000,
    price: 3000,
    discount: 20,
    ratings: 4,
    inStock: true,
    fastDelivery: false,
    productCount: 2,
    color: "cream",
  },
  {
    _id: uuid(),
    id: 2,
    productImg:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/productMen1_or5erf.jpg",
    modelImg:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913106/modelMen1_r0ea7a.jpg",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/m1-1_zazf25.jpg",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/m1-2_fnfidq.jpg",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/m1-3_gncwew.jpg",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/productMen1_or5erf.jpg",
    productBrand: "Puma",
    categoryName: "Men, New Arrivals, BestSellers",
    productDetail: "Hustle V2 Running Shoes For Men ",
    originalPrice: 5000,
    price: 4000,
    discount: 10,
    ratings: 4,
    inStock: false,
    fastDelivery: true,
    productCount: 3,
    color: "white",
  },
  {
    _id: uuid(),
    id: 3,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product8_BWxzTg_JU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654108557",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model8_a5wIhgo5j.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654103358",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/3-1_oexyng.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/3-2_obzplv.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/3-3_leyvbp.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/3-3_leyvbp.webp",
    productBrand: "Puma",
    categoryName: "Women,  Best Sellers",
    productDetail: "Supertec Running Shoes For Men",
    originalPrice: 6900,
    price: 5000,
    discount: 20,
    ratings: 5,
    inStock: true,
    fastDelivery: false,
    productCount: 4,
    color: "white",
  },
  {
    _id: uuid(),
    id: 4,
    productImg:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913108/productMen2_qzu7ew.jpg",
    modelImg:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/modelMen2_cxhmvo.jpg",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/modelMen2_cxhmvo.jpg",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/m2-1_npjvpf.jpg",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/m2-3_ur7gx5.jpg",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/m2-3_ur7gx5.jpg",

    productBrand: "Puma",
    categoryName: "Men",
    productDetail: "Ferrari X-Ray Speed Running Shoes For Men",
    originalPrice: 3500,
    price: 2700,
    discount: 30,
    ratings: 4,
    inStock: true,
    fastDelivery: true,
    productCount: 7,
    color: "cream",
  },
  {
    _id: uuid(),
    id: 5,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product7_Dm-X_4cOVf.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654108170",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model7_RymKAWIWv4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654103114",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/5-2_zq8lab.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913103/5-1_dbpf58.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/5-3_ywnhly.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/5-4_qikofp.webp",
    productBrand: "Puma",
    categoryName: "Women, New Arrivals",
    productDetail: "Troy MU Running Shoes For Men (Grey)",
    originalPrice: 4000,
    price: 3300,
    discount: 20,
    ratings: 5,
    inStock: true,
    fastDelivery: false,
    productCount: 7,
    color: "black",
  },
  {
    _id: uuid(),
    id: 6,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product6_e6Js87jVE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654107695",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model6_ebTXinyV3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654102839",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/6-1_xsmuad.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913104/6-2_adcmg0.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913105/6-3_vzsoqu.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913105/6-4_jc9zn3.webp",
    productBrand: "Adidas",
    categoryName: "Women, Best Sellers",
    productDetail: "Runesy M Running Shoes For Men  (Grey) ",
    originalPrice: 1000,
    price: 599,
    discount: 20,
    ratings: 2,
    inStock: false,
    fastDelivery: false,
    productCount: 8,
    color: "black",
    gender: "women",
    new: false,
    sale: false,
    bestSeller: true,
  },
  {
    _id: uuid(),
    id: 7,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product11_JezrmRn36.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654104290",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model11_nDwJZAnp0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654098835",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913106/7-1_xayblv.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/7-2_irnpwe.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913106/7-3_i1ujfa.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913107/7-4_xvum2f.webp",
    productBrand: "Adidas",
    categoryName: "Men, Best Sellers,New Arrivals",
    productDetail: "Pictoris M Running Shoes For Men  (Black) ",
    originalPrice: 2000,
    price: 1800,
    discount: 40,
    ratings: 3,
    inStock: true,
    fastDelivery: false,
    productCount: 2,
    color: "grey",
  },
  {
    _id: uuid(),
    id: 8,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/white1p_bw7PdwBBd.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654109997",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/white1m_BLSCmChI6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654109552",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913108/8-1_dzzlrl.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913108/8-2_snarcy.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913108/8-3_vb4zxb.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/8-4_rennkj.webp",
    productBrand: "Adidas",
    categoryName: "Women",
    productDetail: "Adifloss M Running Shoes For Men  (Blue) ",
    originalPrice: 5000,
    price: 4500,
    discount: 10,
    ratings: 3,
    inStock: false,
    fastDelivery: false,
    productCount: 4,
    color: "grey",
  },
  {
    _id: uuid(),
    id: 9,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product12_HgPaHPExp.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654104722",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model12_KCTKL4BRT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654099102",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/9-1_tfv8jn.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913108/9-2_sc4t9i.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/9-3_hvxktk.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/9-4_vwxebz.webp",
    productBrand: "Adidas",
    categoryName: "Men, Best Sellers,New Arrivals",
    productDetail: "Quickflow M Running Shoes For Men  (Blue)",
    originalPrice: 9000,
    price: 8000,
    discount: 10,
    ratings: 5,
    inStock: false,
    fastDelivery: true,
    productCount: 5,
    color: "cream",
  },
  {
    _id: uuid(),
    id: 10,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product2_4xU2E2QC2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654106287",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model2_FH5-moRZL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654101183",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/10-1_mgshm9.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/10-2_xqweqc.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913109/10-3_jqyeya.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/10-4_zx8omc.webp",
    productBrand: "Nike",
    categoryName: "Women",
    productDetail: "Revolution 5 Running Shoes For Men  (Black) ",
    originalPrice: 10000,
    price: 9000,
    discount: 20,
    ratings: 3,
    inStock: false,
    fastDelivery: false,
    productCount: 1,
    color: "white",
  },
  {
    _id: uuid(),
    id: 11,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product4_bvedBlWM8.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654106757",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model4_dsg46TsRd3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654102144",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/11-1_blmucf.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/11-2_ljy0h0.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/11-3_koizrs.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/11-4_tdhfcb.webp",
    productBrand: "Nike",
    categoryName: "Women,Best Sellers,New Arrivals",
    productDetail: "Revolution 6 Next Nature Road s Running Shoes For Men  ",
    originalPrice: 9000,
    price: 8400,
    discount: 10,
    ratings: 5,
    inStock: true,
    fastDelivery: false,
    productCount: 3,
    color: "white",
  },
  {
    _id: uuid(),
    id: 12,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product5_tEftHcA3C.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654107219",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model5_OL6wdupJN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654102398",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/12-1_veudus.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/12-2_qsf0f7.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913110/12-3_t9otob.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913111/12-4_f7pxy7.webp",
    productBrand: "Nike",
    categoryName: "Women, Best Sellers",
    productDetail: "Downshifter 11 Road s Running Shoes For Men ",
    originalPrice: 3000,
    price: 2000,
    discount: 30,
    ratings: 3,
    inStock: true,
    fastDelivery: true,
    productCount: 6,
    color: "cream",
  },
  {
    _id: uuid(),
    id: 20,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsproduct5_GrcZ8VK9n.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649658843653",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel5_SV9aBsGjy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658840159",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-1-product_w65wen.jpg",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-2_swsqyz.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-3_w6mysg.webp",

    productBrand: "Hrx",
    categoryName: "Kids, Best Sellers",
    productDetail: "Revolution 6 Next Nature Road Running Shoes",
    originalPrice: 11000,
    price: 10000,
    discount: 50,
    ratings: 2,
    inStock: false,
    fastDelivery: true,
    productCount: 4,
    color: "black",
  },
  {
    _id: uuid(),
    id: 13,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product3_1eyWEEfNV.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654106451",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model3_BGLowr-1A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654101416",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/13-2_jgzmxh.webp",
    imgTwo:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product3_1eyWEEfNV.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654106451",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/13-3_i2uetx.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/13-4_q4zpna.webp",
    productBrand: "Nike",
    categoryName: "Women",
    productDetail: "Revolution 4 Running Shoes For Men  (Black)",
    originalPrice: 7000,
    price: 6000,
    discount: 20,
    ratings: 4,
    inStock: true,
    fastDelivery: false,
    productCount: 9,
    color: "cream",
  },
  {
    _id: uuid(),
    id: 17,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsproduct2_fxuz6c2DE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649658841296",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel2_N4gDb1VzE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658839245",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/111_vjppei.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/11_j0nhro.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/1_ji0ain.webp",
    productBrand: "Hrx",
    categoryName: "Kids,Best Sellers",
    productDetail: "Revolution 6 Next Nature Road Running Shoes",
    originalPrice: 11000,
    price: 10000,
    discount: 50,
    ratings: 3,
    inStock: false,
    fastDelivery: true,
    productCount: 4,
    color: "black",
  },
  {
    _id: uuid(),
    id: 14,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product10_PGatAs1PWZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654103924",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model10_zLI7qhYYr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654098754",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/14-1_ak7z9f.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/14-2_d67py4.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913100/14-3_gqf0my.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/14-4_tfn1ne.webp",
    productBrand: "Nike",
    categoryName: "Men, Best Sellers,New Arrivals",
    productDetail: "Revolution 6 Next Nature Road Running Shoes",
    originalPrice: 5000,
    price: 4000,
    discount: 30,
    ratings: 3,
    inStock: false,
    fastDelivery: true,
    productCount: 2,
    color: "black",
  },
  {
    _id: uuid(),
    id: 15,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/product13_rDl67tOaS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649654105016",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/model13_HGJekji6M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649654099706",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/15-1_hkz2cm.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/15-2_ebnm3h.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/15-3_xznclg.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/15-4_u99u5m.webp",
    productBrand: "Reebok",
    categoryName: "Men, Best Sellers",
    productDetail: "Downshifter 11 Road s Running Shoes For Men ",
    originalPrice: 10000,
    price: 9000,
    discount: 20,
    ratings: 4,
    inStock: true,
    fastDelivery: true,
    productCount: 1,
    color: "white",
  },

  {
    _id: uuid(),
    id: 16,
    productImg:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506488/163_xnfhhv.webp",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel4_yuyL9x3QD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658839554",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506488/163_xnfhhv.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/161_bh7lpd.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506488/16_qhx4cb.webp",

    productBrand: "Reebok",
    categoryName: "Kids,New Arrivals",
    productDetail: "Revolution 4 Running Shoes For Men  (Black)",
    originalPrice: 10000,
    price: 9000,
    discount: 20,
    ratings: 4,
    inStock: true,
    fastDelivery: false,
    productCount: 8,
    color: "purple",
  },

  {
    _id: uuid(),
    id: 18,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsproduct3_vAmLyo_R9.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649658841624",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel3_GiBQ7tAYh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658839512",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-1-product_w65wen.jpg",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-2_swsqyz.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913101/18-3_w6mysg.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/18-4_ehwchg.webp",
    productBrand: "Reebok",
    categoryName: "Kids",
    productDetail: "Downshifter 11 Road s Running Shoes For Men ",
    originalPrice: 10000,
    price: 9000,
    discount: 20,
    ratings: 4,
    inStock: true,
    fastDelivery: true,
    productCount: 1,
    color: "black",
  },
  {
    _id: uuid(),
    id: 19,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsproduct1_2dYSr5Y0s.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649658840667",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel1_7J2ki8cQT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658839285",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/111_vjppei.webp",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/11_j0nhro.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1654506487/1_ji0ain.webp",
    productBrand: "Reebok",
    categoryName: "Kids, New Arrivals",
    productDetail: "Revolution 4 Running Shoes For Men  (Black)",
    originalPrice: 10000,
    price: 9000,
    discount: 20,
    ratings: 3,
    inStock: true,
    fastDelivery: false,
    productCount: 8,
    color: "white",
  },

  {
    _id: uuid(),
    id: 21,
    productImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsproduct6_u0QazgbZZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649658844065",
    modelImg:
      "https://ik.imagekit.io/yol3sixl2xj/product-listing/kids/kidsmodel6_bmYXiWxAF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649658840498",
    imgOne:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/21-1-product_ejeiry.jpg",
    imgTwo:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/21-2_dgj5st.webp",
    imgThree:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/21-3_h2qdzl.webp",
    imgFour:
      "https://res.cloudinary.com/bhakti1801/image/upload/v1649913102/21-4_wrhiyz.webp",
    productBrand: "Hrx",
    categoryName: "Kids",
    productDetail: "Revolution 6 Next Nature Road Running Shoes",
    originalPrice: 11000,
    price: 10000,
    discount: 50,
    ratings: 1,
    inStock: false,
    fastDelivery: true,
    productCount: 4,
    color: "black",
  },
];
