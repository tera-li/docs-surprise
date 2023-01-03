import { defineConfig } from "vitepress";
const sidebar = [
  {
    text: "前端三把斧",
    collapsible: true,
    items: [
      {
        text: "HTML",
        link: "/html/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
      {
        text: "JavaScript",
        items: [
          { text: "JavaScript Basics", link: "/javascript/" },
          { text: "JavaScript New Features", link: "/javascript/js-feat" },
          { text: "JavaScript Window", link: "/javascript/js-window" },
          { text: "JavaScript Engine", link: "/javascript/js-engine" },
          { text: "JavaScript Proto", link: "/javascript/js-proto" },
          {
            text: "JavaScript Communication",
            link: "/javascript/js-dataCommunication",
          },
          { text: "JavaScript Data Type", link: "/javascript/js-dataType" },
          {
            text: "JavaScript Web Components",
            link: "/javascript/js-webComponent",
          },
          {
            text: "JavaScript Design Pattern",
            link: "/javascript/js-design",
          },
        ],
      },
    ],
  },
  {
    text: "前端框架",
    collapsible: true,
    collapsed: true,
    items: [
      {
        text: "Vue",
        items: [{ text: "Vue2 Reactive", link: "/vue/vue2-reactive" }],
      },
      {
        text: "React",
        items: [],
      },
    ],
  },
  {
    text: "打包部署",
    collapsible: true,
    items: [
      {
        text: "Webpack",
        link: "/build/webpack",
      },
      {
        text: "Vite",
        link: "/build/vite",
      },
    ],
  },
  {
    text: "性能优化",
    collapsible: true,
    items: [
      {
        text: "Http",
        link: "/performance/http-performance",
      },
      {
        text: "Build",
        link: "/performance/build-performance",
      },
    ],
  },
  // {
  //   text: "JAVA",
  //   collapsible: true,
  //   items: [],
  // },
];

export default defineConfig({
  // 左侧标题，｜ 左侧文字
  title: "Docs",
  base: "/docs-surprise",
  // 浏览器标签，｜ 右侧文字
  titleTemplate: false,
  // 页面描述，自动注入meta
  description: "Just playing around.",
  // 页面头部，自动注入
  head: [["link", { rel: "shortcut icon", href: "../static/aperture.svg" }]],
  // 语言，<html lang="en-US">
  lang: "en-US",
  // 最后更新时间，可在themeConfig自定义配置
  lastUpdated: true,
  // 打包目录生成
  // outDir: "../public",
  // markdown配置
  markdown: {
    theme: "monokai",
    lineNumbers: true,
  },
  // 主题配置
  themeConfig: {
    // 左侧logo
    logo: "../static/aperture.svg",
    // 顶部导航
    nav: [
      { text: "HTML", link: "/html/" },
      { text: "CSS", link: "/css/" },
      { text: "JS", link: "/javascript/index" },
      // { text: "Home", link: "/" },
    ],
    sidebar: sidebar,
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/hljinjiang" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="764.000000pt" height="764.000000pt" viewBox="0 0 764.000000 764.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,764.000000) scale(0.100000,-0.100000)" fill="#1171ee" stroke="none">
          <path d="M3710 6773 c-58 -46 -120 -96 -139 -111 -147 -117 -307 -247 -317 -256 -6 -6 -68 -55 -137 -110 -69 -54 -143 -113 -164 -132 -21 -19 -42 -34 -47 -34 -4 0 2 -11 15 -25 13 -13 29 -25 36 -25 6 0 13 -4 15 -9 2 -5 120 -102 263 -216 143 -114 278 -221 299 -238 56 -45 119 -96 131 -105 45 -33 113 -90 128 -104 21 -21 24 -22 41 -5 8 6 24 19 36 27 13 8 30 22 39 31 9 8 45 38 81 64 80 61 87 66 108 86 9 8 57 47 107 85 49 38 98 77 110 87 11 10 106 86 210 169 105 82 194 154 200 159 10 10 -22 43 -95 98 -19 14 -41 32 -48 39 -8 7 -30 25 -50 40 -21 15 -39 29 -42 33 -3 3 -122 99 -265 213 -143 113 -269 215 -280 224 -29 26 -108 88 -120 94 -5 3 -57 -32 -115 -79z"/>
          <path d="M1984 5387 c-55 -45 -117 -95 -138 -112 -22 -16 -44 -34 -50 -40 -6 -5 -34 -28 -61 -50 -28 -22 -55 -44 -62 -50 -7 -5 -18 -14 -25 -20 -50 -39 -116 -91 -130 -104 -34 -31 -46 -40 -51 -35 -2 3 -7 -2 -10 -10 -4 -9 6 -25 26 -41 18 -14 38 -30 46 -37 7 -6 34 -27 60 -46 25 -19 48 -39 49 -44 2 -4 10 -8 17 -8 7 0 15 -4 17 -8 2 -4 37 -34 78 -67 41 -32 77 -62 80 -65 3 -3 21 -17 40 -30 19 -13 37 -27 40 -30 5 -7 227 -182 290 -230 18 -14 38 -30 44 -35 6 -6 31 -26 56 -45 25 -19 47 -38 48 -42 2 -5 8 -8 14 -8 6 0 16 -6 22 -13 6 -8 52 -45 101 -83 50 -38 92 -71 95 -74 3 -3 37 -30 75 -60 39 -30 75 -59 82 -65 15 -12 27 -21 83 -65 25 -19 50 -39 56 -45 6 -5 46 -37 89 -70 120 -93 337 -265 365 -289 14 -12 41 -32 60 -46 19 -14 44 -32 55 -42 19 -15 98 -79 120 -96 75 -58 101 -78 105 -82 21 -22 140 -110 149 -110 8 0 376 284 476 368 11 9 40 32 65 51 25 19 50 39 57 45 7 6 25 21 40 33 133 103 279 218 283 223 3 3 23 19 45 35 22 16 47 35 55 42 8 7 67 53 130 103 63 50 129 101 145 115 17 13 134 105 260 205 127 100 242 191 257 203 15 12 39 31 54 42 15 11 44 34 65 51 21 17 97 78 171 135 73 57 135 106 138 109 3 3 33 28 68 55 l63 48 -31 29 c-17 15 -35 28 -40 28 -4 0 -10 4 -12 8 -1 4 -37 35 -78 67 -41 33 -77 62 -80 65 -3 3 -84 68 -180 144 -96 77 -177 142 -180 145 -32 36 -38 35 -127 -35 -49 -37 -90 -71 -93 -74 -3 -3 -45 -37 -95 -75 -97 -75 -287 -226 -320 -253 -11 -10 -36 -28 -55 -42 -19 -13 -42 -32 -51 -42 -9 -10 -19 -18 -23 -18 -3 0 -16 -9 -28 -19 -34 -29 -198 -159 -538 -426 -168 -132 -307 -242 -310 -245 -3 -3 -33 -28 -68 -54 l-63 -48 -57 43 c-31 24 -61 48 -67 53 -5 6 -28 24 -50 40 -22 17 -42 32 -45 36 -3 3 -21 17 -42 32 -20 15 -42 33 -50 40 -7 7 -40 33 -73 57 -33 25 -62 47 -65 51 -3 3 -25 21 -50 40 -25 19 -52 41 -60 47 -8 7 -82 66 -165 131 -82 64 -159 125 -170 134 -11 9 -58 46 -105 83 -106 82 -139 108 -167 132 -12 10 -36 29 -54 43 -44 34 -152 118 -164 128 -5 4 -64 50 -130 102 -66 52 -122 97 -125 100 -10 10 -89 70 -92 69 -2 0 -48 -37 -104 -82z"/>
          <path d="M6884 4222 c-60 -47 -186 -147 -280 -222 -94 -74 -186 -146 -204 -160 -78 -59 -185 -146 -188 -152 -2 -5 -8 -8 -12 -8 -5 0 -20 -10 -33 -22 -13 -13 -39 -34 -57 -48 -34 -25 -140 -109 -171 -135 -10 -7 -48 -37 -85 -66 -38 -29 -76 -60 -85 -68 -8 -9 -32 -27 -52 -41 -20 -14 -37 -28 -37 -32 0 -5 -6 -8 -14 -8 -8 0 -16 -3 -18 -8 -1 -4 -61 -54 -133 -110 -71 -57 -137 -108 -145 -115 -8 -7 -49 -38 -90 -70 -41 -32 -91 -71 -110 -87 -19 -16 -73 -59 -120 -95 -47 -36 -97 -77 -113 -90 -15 -14 -31 -25 -36 -25 -5 0 -11 -3 -13 -7 -2 -7 -59 -54 -133 -111 -64 -49 -183 -143 -195 -154 -9 -7 -67 -53 -130 -103 -63 -49 -116 -93 -118 -97 -2 -4 -8 -8 -13 -8 -5 0 -20 -9 -32 -21 -18 -17 -95 -78 -282 -224 -16 -13 -61 -48 -99 -78 l-68 -55 -82 65 c-114 92 -138 111 -256 203 -58 45 -107 85 -110 89 -3 3 -43 35 -90 71 -107 81 -98 74 -145 115 -22 19 -43 35 -47 35 -4 0 -13 6 -20 13 -7 7 -49 41 -93 76 -44 34 -93 73 -110 86 -16 14 -100 79 -185 146 -146 116 -303 239 -325 257 -5 4 -48 38 -95 75 -215 169 -557 441 -578 458 -12 10 -27 19 -32 19 -6 0 -10 3 -10 8 0 4 -33 32 -72 62 -40 30 -102 78 -138 108 -36 29 -168 134 -295 233 -126 99 -239 188 -250 197 -11 9 -63 50 -115 91 -52 41 -97 78 -98 83 -5 12 -42 9 -56 -4 -7 -7 -27 -24 -45 -38 -18 -14 -63 -50 -100 -80 -187 -153 -416 -335 -424 -339 -5 -2 -18 -12 -28 -22 -18 -18 -17 -20 41 -64 32 -25 65 -51 72 -58 7 -6 31 -25 53 -41 22 -17 42 -33 45 -36 3 -3 45 -37 95 -75 49 -39 97 -75 105 -82 42 -34 291 -231 316 -250 16 -12 40 -31 54 -42 14 -11 66 -52 115 -91 50 -39 99 -78 109 -87 11 -9 40 -32 65 -51 25 -19 67 -52 92 -73 26 -22 52 -39 58 -39 6 0 11 -4 11 -8 0 -4 21 -24 48 -44 26 -20 57 -45 69 -55 12 -10 34 -27 49 -38 15 -11 32 -24 38 -30 6 -5 29 -23 51 -39 22 -17 42 -33 45 -36 3 -3 46 -37 95 -75 50 -38 92 -72 95 -75 3 -3 23 -19 45 -35 22 -17 42 -32 45 -36 5 -5 178 -142 240 -189 18 -14 40 -32 50 -40 10 -8 32 -26 50 -40 18 -14 81 -63 140 -110 59 -47 119 -94 134 -105 16 -11 33 -25 40 -30 6 -6 65 -53 131 -105 66 -52 125 -99 131 -105 7 -5 24 -19 39 -30 37 -27 187 -146 203 -162 7 -7 16 -13 20 -13 4 0 25 -16 47 -35 22 -19 45 -38 50 -43 18 -13 99 -77 115 -89 73 -58 337 -267 380 -300 30 -23 69 -54 85 -67 17 -14 39 -32 50 -40 11 -8 34 -26 50 -40 32 -26 45 -24 85 13 23 20 35 29 91 72 24 19 89 70 144 114 138 109 394 311 429 338 15 12 33 27 40 32 6 6 40 33 76 60 36 27 70 54 76 60 7 5 26 21 44 35 29 23 74 58 140 110 14 11 57 44 95 75 39 30 85 67 104 82 18 16 41 32 50 37 9 5 18 12 21 16 4 6 140 115 260 208 19 15 68 54 110 87 41 33 116 92 165 130 50 38 92 72 95 75 3 3 57 46 120 95 63 49 123 96 132 104 9 9 23 21 30 26 12 9 118 90 156 120 7 5 21 17 31 25 9 8 35 28 56 45 54 40 62 47 90 73 13 12 28 22 34 22 5 0 11 3 13 8 3 6 102 87 187 152 18 13 43 33 56 45 13 11 42 33 64 49 23 17 41 33 41 38 0 4 6 8 14 8 8 0 16 3 18 8 2 4 77 66 168 137 149 116 205 161 250 198 17 14 103 81 150 117 85 64 215 172 213 177 -1 2 -19 18 -40 34 -21 16 -45 35 -53 42 -8 7 -49 39 -90 72 -41 33 -77 62 -80 65 -3 3 -72 59 -155 124 -82 66 -152 122 -155 126 -3 3 -19 16 -36 27 l-30 22 -110 -87z"/>
          </g>
          </svg>`,
        },
        link: "https://juejin.cn/user/3395724659925656/posts?sort=popular",
      },
    ],
    // 编辑配置
    editLink: {
      pattern:
        "https://github.com/hljinjiang/docs-surprise/blob/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    // 底部配置
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Surprise",
    },
    // 文档页脚
    // docFooter: {
    //   prev: "prev page",
    //   next: "next page",
    // },
    // 最后更新时间
    lastUpdatedText: "最近更新时间 ",
  },
});
