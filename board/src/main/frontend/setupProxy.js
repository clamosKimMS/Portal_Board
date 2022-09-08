// module import -> npm install http-proxy-middleware
// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            // target: "http://springboot:8080", // 배포 서버 URL 설정
            target: "http://localhost:8080", // 로컬 서버 URL 설정
            changeOrigin: true,
        })
    );
};