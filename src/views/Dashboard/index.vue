<template>
    <!-- 侧边栏 -->
    <side-bar-frame :navigator="navigator">
        <router-view></router-view>
    </side-bar-frame>
    
</template>

<script>
export default {
    name: 'Dashboard',
    data(){
        return {
            //侧边栏导航信息
            navigator: [
                {label: '欢迎', route: '/dashboard/welcome', icon: 'el-icon-s-home'}
            ]
        }
    }
}
</script>
