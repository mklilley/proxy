// uses http-proxy-middleware V2
// https://github.com/chimurai/http-proxy-middleware/tree/v2.0.4#readme

require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
    createProxyMiddleware({
        target: process.env.API,
        changeOrigin: true,
        onProxyRes: (proxyRes, req, res) => {
            proxyRes.headers["Access-Control-Allow-Origin"] = "*";
        },
        onError: (err, req, res) => {
            console.log(err);
        },
    })
);

app.listen(process.env.PORT);
