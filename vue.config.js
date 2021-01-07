// 配置一些别名，到时候会合并
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            // alias别名
            alias: {
                // '@/assets脚手架3可以用，脚手架2不支持
                // 已经有@别名了,router，store引用少暂时不需要
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}