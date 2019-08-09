<!--
 * @Description: 登录页面
 * @Author: your name
 * @Date: 2019-08-05 13:07:58
 * @LastEditTime: 2019-08-09 13:56:23
 * @LastEditors: Please set LastEditors
 -->

<template>
    <div class="signin">
        <el-card class="box-card">
            <logo />
            <el-form :model="input" ref="form" class="form" :rules="rules">
                <el-form-item prop="name">
                    <el-input placeholder="用户名" v-model="input.name" clearable prefix-icon="el-icon-user-solid" />
                </el-form-item>
                
                <el-form-item prop="password">
                    <el-input placeholder="密码" show-password v-model="input.password" clearable prefix-icon="el-icon-lock" />
                </el-form-item>

                <div class="horizontal flex button-bar" @click="onSubmit">
                    <el-button type="primary">登录</el-button>
                </div>
            </el-form>
        </el-card>

    </div>
</template>

<script>
const namespace = 'BuiltIn/Account';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SignIn',
    data(){
        return {
            input: {
                name: '',
                password: ''
            },
            rules: {
                name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            }
        }
    },
    methods: {
        ...mapActions(namespace, ['setUser']),
        onSubmit(){
            this.$refs['form'].validate((valid) => {
                if(valid){
                    //在这里请求后端登录接口
                    this.setUser({ user: this.input });
                    this.$router.push('/');
                }
            });
        }
    },
    computed:{
        ...mapGetters(namespace, ['authorized'])
    }
}
</script>

<style scoped>
.signin{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.box-card{
    width: 600px;
}

.form{
    margin-top: 30px;
}

.button-bar{
    justify-content: flex-end;
    align-items: center;
}
</style>

