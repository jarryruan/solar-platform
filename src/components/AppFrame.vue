<!--
 * @Description: 导航框架
 * @Author: jarryruan
 * @Date: 2019-07-04 11:17:36
 -->

<template>
    <div v-cloak class="app-frame">
        <template v-if="authorized">
            <navigator />
        </template>

        <div class="gap"></div>
        <div class="wrapper">
            <slot></slot>
        </div>
        <div class="footer">
            本系统由 Solar 管理系统建设
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFrame',
    computed:{
        authorized(){
            return this.$store.getters['BuiltIn/Account/authorized'];
        }
    }
}
</script>


<style scoped>
.app-frame{
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #f0f5f9;
}
.wrapper{
    overflow: auto;
    flex: 1;
}
.gap{
    height: 0.5rem;
}
.footer{
    text-align: center;
    background-color: #fff;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    font-size: 10pt;
    color: #666;
}
</style>
