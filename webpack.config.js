module.exports = {
    entry:"./script.js",
    mode: "development",
    output:{
        path: __dirname + "/dist/js",
        filename:"bundle.js"
    },
    devServer: {
        static: {
            directory: __dirname,
        },
        port: 9000
    }
}