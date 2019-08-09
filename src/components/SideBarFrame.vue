<!--
 * @Description: In User Settings Edit
 * @Author: jarryruan
 * @Date: 2019-07-06 10:46:17
 -->

<template>
    <div class="wrapper">
        <!-- 左侧侧边栏 -->
        <el-menu 
            class="menu"
            :router="true"
            :collapse="collapsed"
            :default-active="$route.path"
            text-color="#666"
            active-text-color="#fff">

            <el-menu-item 
                v-for="(item, index) in navigator"
                :key="index"
                :index="item.route">

                <!-- 图标 -->
                <i v-if="item.icon" :class="item.icon"></i>

                <!-- 标题 -->
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
            
        </el-menu>

        <!-- 侧边栏折叠按钮 -->
        <div class="collapse-trigger">
            <div class="tag" @click="triggerCollapse">

                <!-- 若未折叠，则显示折叠按钮 -->
                <i v-if="!collapsed" class="el-icon-arrow-left"></i>

                <!-- 否则显示展开按钮 -->
                <i v-else class="el-icon-arrow-right"></i>
            </div>
        </div>

        <!-- 右侧正文内容 -->
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
const namespace = 'BuiltIn/Settings';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'SideBarFrame',
    props: {
        navigator: {
            type: Array,
            default: () => []
        }
    },

    computed:{
        ...mapState(namespace, {
            collapsed: state => state.sideBarCollapsed
        })
    },
    

    methods:{
        ...mapActions(namespace, ['setSideBarCollapsed']),

        /**
         * @description: 导航到新的页面
         * @param route url字符串 或 vue-router 的route对象
         */
        redirect(route){
            this.$router.push(route);
        },

        /**
         * @description: 切换侧边栏的折叠/展开状态
         */
        triggerCollapse(){
            this.setSideBarCollapsed({ sideBarCollapsed: !this.collapsed });
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.menu.el-menu{
    border-right: none;
}
.collapse-trigger{
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.collapse-trigger .tag{
    background-color: #409EFF;
    padding: 30px 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
}

.menu.el-menu:not(.el-menu--collapse){
    width: 160px;
}

.slot{
    flex: 1;
    background-color: #fff;
    overflow: auto;
}
.el-menu-item.is-active{
    background-color: #409EFF;
}
</style>


