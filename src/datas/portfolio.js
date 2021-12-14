const portfolio =  {
  "qtc": {
    "title": "QTCOMM 酷堤康科技有限公司",
    "description": [
      {
        content: "帶領新進資淺前端工程師同仁，協助問題排除、技術交流、經驗分享。",
      },
      {
        content: "前端團隊使用：",
        list: [
          "UI 套件：Quasar.js, Element-ui, HighChart",
          "Vue.js 全家餐：透過 Vue Router 路由守衛做到權限控管、透過 Vuex 管理跨組件資料。",
          "使用  CDD (Component Driven Development)  組件驅動開發法，透過 CLI (Command-Line Interface) 建立 components folder 定義為共用元件庫，藉此達到元件統一化，且不重複開發之目的。",
          "使用 Jest 進行整合測試，亦使用 Mock Service Worker 撰寫 Mock API。",
          "資料串接採用  Axios  方法並遵循  RESTful  API  規範。",
          "遵循  ESLint  Programming  Style  團隊規則，建立易於維護的程式碼。",
          "仰賴  git  (command  line  /  GUI)  做檔案版本控制。",
        ],
      },
      {
        content: "跨部門開發方式為：",
        list: [
          "與後端透過 Swagger 串接資料。",
          "悉知  CI  /  CD  流程，透過  Github,  Jira,  Travis CI  完成整合自動化發佈。",
          "與  APP  團隊合作，透過  deeplink 當中的 schema  協議達到行動裝置打開  APP。",
          "與  UI  designer  透過  figma  溝通，將統一的設計規範統整為  CSS  共用樣式。",
          "透過 Jira / Confluence 與 PM, QA 建立階段性任務，藉此可了解各部門同仁彼此的進度，一同開發完成專案。",
        ],
      },
    ],
    "list": [
      {
        content: "TaxBI 印尼稅務系統",
      },
      {
        content: "CodeCert 證書管理系統",
      },
      {
        content: "各系統中控管理後台維護及開發",
        list: [
          "CodeCert 管理介面開發",
          "TaxBI 各系統管理介面開發",
          "LuckyDraw 開獎系統管理介面開發",
        ]
      },
    ],
    "collection": [
      {
        type: 'TaxBI',
        label: 'TaxBI',
        cover: 'img/about.jpg',
        title: '印尼稅務系統 TaxBI (https://taxbi.ecomm-cloud.net/)',
        content: [
          '系統帳號權限控管',
          '圖表資料整合',
          '檔案上傳(單次/批次)',
          '各式報表 CSV 匯出',
        ],
        images: [
          'img/about.jpg',
          'img/about.jpg',
          'img/about.jpg',
        ]
      },
      {
        type: 'Admin',
        label: 'QTCOMM 中控管理後台',
        cover: 'img/about.jpg',
        title: '印尼稅務系統 TaxBI (https://taxbi.ecomm-cloud.net/)',
        content: [
          "CodeCert 管理介面開發：建立/查詢帳號、權限管理、證書數量管理",
          "TaxBI 各系統管理介面開發：建立/查詢帳號、權限管理",
          "LuckyDraw 開獎系統管理介面開發：結合 Quasar 及 vue-advanced-cropper 圖片裁切及上傳、各類獎項設置、各式報表匯出",
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
      {
        type: 'CodeCert',
        label: 'CodeCert',
        cover: 'img/about.jpg',
        title: 'CodeCert 證書管理系統 (https://www.code-cert.com/)',
        content: [
          '系統帳號權限控管',
          '檔案上傳(單次/批次)',
          '透過 Electron.js 呼叫印表機執行(單次/批次)列印',
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
    ],
  },
  "red": {
    "title": "RedSo 紅鬍子數位",
    "list": [
      {
        content: "香港電商網站 big big shop",
      },
      {
        content: "Boutir 自動化物流",
      },
      {
        content: "CLUB Travel",
      }
    ],
    "collection": [
      {
        type: 'bigbigshop',
        label: 'big big shop',
        cover: 'img/about.jpg',
        title: '香港電商網站 big big shop (https://www.bigbigshop.com/)',
        content: [
          '維護前台使用者介面',
          '優化官網介面',
          '搜尋系統改版',
          '購物車系統改版',
        ],
        images: [
          'img/about.jpg',
          'img/about.jpg',
          'img/about.jpg',
        ]
      },
      {
        type: 'Boutir',
        label: 'Boutir 自動化物流',
        cover: 'img/about.jpg',
        title: 'Boutir 掌舖',
        content: [
          '自動化物流 - 訂單追蹤功能',
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
      {
        type: 'CLUBTravel',
        label: 'CLUB Travel',
        cover: 'img/about.jpg',
        title: 'CLUB Travel',
        content: [
          '搜尋列表 - 切版',
          '搜尋列表 - 串接 Google Map API',
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
    ],
  },
  "bb": {
    "title": "PressLogic 台灣邏輯媒體科技",
    "list": [
      {
        content: "BeautyBee 自有社群平台",
      },
    ],
    "collection": [
      {
        type: 'BeautyBee',
        label: 'BeautyBee',
        cover: 'img/about.jpg',
        title: '社群平台 BeautyBee (https://www.beautybee.com)',
        content: [
          '系統帳號權限控管',
          '圖表資料整合',
          '檔案上傳(單次/批次)',
          '各式報表 CSV 匯出',
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
    ],
  },
  "wlj": {
    "title": "1828集團-王老吉茶館",
    "list": [
      {
        content: "1828 王老吉涼水舖",
      },
    ],
    "collection": [
      {
        type: '1828',
        label: '1828',
        cover: 'img/about.jpg',
        title: '飲料訂購系統 1828 王老吉涼水舖',
        content: [
          '系統帳號權限控管',
          '圖表資料整合',
          '檔案上傳(單次/批次)',
          '各式報表 CSV 匯出',
        ],
        images: [
          "img/about.jpg",
          "img/about.jpg",
          "img/about.jpg",
        ]
      },
    ],
  },
}

export default portfolio;
