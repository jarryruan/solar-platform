<!--
 * @Description: 主机管理
 * @Author: your name
 * @Date: 2019-07-31 15:50:12
 * @LastEditTime: 2019-08-09 13:46:57
 * @LastEditors: Please set LastEditors
 -->
<template>
    <!-- 侧边栏 -->
    <side-bar-frame :navigator="navigator">
        <router-view></router-view>
    </side-bar-frame>
    
</template>

<script>
export default {
    name: 'Hosts',
    data(){
        return {
            //侧边栏导航信息
            navigator: [
                {label: '主机管理', route: '/hosts/list', icon: 'el-icon-pie-chart'}
            ]
        }
    }
}
</script>
