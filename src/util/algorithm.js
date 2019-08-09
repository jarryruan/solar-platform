/*
 * @Description: 算法类工具
 * @Author: jarryruan
 * @Date: 2019-08-09 13:07:09
 * @LastEditTime: 2019-08-09 13:29:34
 * @LastEditors: Please set LastEditors
 */

import crypto from 'crypto';


const defaultIV = '9958389269714528'; //aes 默认 iv
const defaultKey = '7D89BB007C3BD2659B8F30BA15F47EA4';  //aes 默认 Key


export default {
    encryptAES(str, key = defaultKey, iv = defaultIV){
        var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        var crypted = cipher.update(str, 'utf8', 'binary');
        crypted += cipher.final('binary');
        crypted = new Buffer(crypted, 'binary').toString('hex');
        return crypted;
    },
    
    decryptAES(str, key = defaultKey, iv = defaultIV){
        try{
            const crypted = new Buffer(str, 'hex').toString('binary');
            const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
            let decoded = decipher.update(crypted, 'binary', 'utf8');
            decoded += decipher.final('utf8');
            return decoded;
        }catch(e){
            return null;
        }
    }
}




