/*
 * @Description: 系统全局设定
 * @Author: jarryruan
 * @Date: 2019-07-03 20:13:35
 */


 //编译环境
const env = process.env.NODE_ENV;
const apiRoot = (env === 'development') ? '//fe.wxpay.oa.com/mock_server/mock/456/api/' : '//wxpay.oa.com/kunpeng/index2.php/cfaceapi';


export default {
    env,
    api: {
        root: apiRoot
    }
}