<!--
 * @Description: 导航栏组件
 * @Author: jarryruan
 * @Date: 2019-07-04 11:17:36
 -->

<template>
    <el-menu mode="horizontal" :default-active="defaultActive" active-text-color="#409EFF" class="nav horizontal flex" :router="true" :collapse-transition="false">
        <!-- logo 单元 -->
        <logo class="el-menu-item logo" @click.native="onLogoClick" />

        <el-menu-item index="/dashboard">仪表盘</el-menu-item>
        <el-menu-item index="/hosts">主机管理</el-menu-item>

        <div class="autofill" style="opacity: 0;"></div>

        <el-submenu index="user">
            <template slot="title">{{username}}</template>
            <div class="el-menu-item" @click="logout">退出</div>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'Navigator',
    methods: {
        onLogoClick(){
            this.$router.push({name: 'Dashboard.Welcome'});
        },
        logout(){
            this.$store.commit('BuiltIn/Account/setUser', { user: null });
            this.$nextTick(() => {
                this.$router.push({name: 'SignIn'});
            });
        }
    },
    computed:{
        username(){
            return this.$store.getters['BuiltIn/Account/username'];
        },

        defaultActive(){
            const { path } = this.$route;
            const components = path.split('/');
            if(components.length > 1){
                return `/${components[1]}`;
            }else{
                return '';
            }
        },



    }
}
</script>


<style scoped>
.nav{
    width: 100%;
    box-sizing: border-box;
}

.logo{
    height: 74px;
    float: left;
    margin-right: 1rem;
}

.el-menu-item,
.el-submenu >>> .el-submenu__title{
    height: 74px;
    line-height: 74px;
}

.nav.el-menu{
    border-bottom: none;
    padding: 0 1rem;
}
</style>
