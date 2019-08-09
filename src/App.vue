<!--
 * @Description: 根组件
 * @Author: jarryruan
 * @Date: 2019-07-03 18:40:08
 -->

<template>
    <app-frame>
        <!-- 查看路由表：/src/routers/index.js -->
        <router-view/>
    </app-frame>
</template>


<script>
import test from '@/test';
import config from '@/config';

export default {
    name: 'App',
    mounted(){
        if(config.env === 'development'){
            //开发环境下执行测试
            test();
        }
    }
}
</script>
