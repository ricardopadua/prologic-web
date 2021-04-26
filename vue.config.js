/* eslint-disable @typescript-eslint/no-var-requires */
const bodyParser = require('body-parser')
const { NODE_ENV, VUE_APP_PORT, VUE_APP_MOCK } = process.env;
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    productionSourceMap: false,
    devServer: {
        port: VUE_APP_PORT || 8080,
        // 配置反向代理
        /*
        proxy: {
            '/api': {
              target: '<url>',
              ws: true,
              changeOrigin: true
            },
            '/foo': {
              target: '<other_url>'
            }
        },
        */
        before: function(app, server) {
            if(NODE_ENV === 'development' && VUE_APP_MOCK === 'true') {
                // parse app.body
                // https://expressjs.com/en/4x/api.html#req.body
                // create application/json parser
                app.use(bodyParser.json());
                // create application/x-www-form-urlencoded parser
                app.use(bodyParser.urlencoded({ extended: false}));
                mockServer(app);            
            }            
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    // 修改webpack的配置
    configureWebpack: {
        // 不需要打包的插件
        externals: {
            // 'vue': 'Vue',
            // 'vue-router': 'VueRouter',
        }
    },
    chainWebpack(config) {}
}