module.exports = {
    entry:"./script.js",
    mode: "development",
    output:{
        path: __dirname + "/dist/js",
        filename:"bundle.js"
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}