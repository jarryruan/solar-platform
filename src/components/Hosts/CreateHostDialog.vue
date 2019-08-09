<template>
    <el-dialog
        title="添加主机"
        :visible="visible"
        @update:visible="$emit('update:visible', $event)"
        :append-to-body="true"
        :close-on-click-modal="false"
        @open="onOpen">

        <el-form label-width="100px" label-position="left" :rules="rules" :model="input" ref="form">
            <el-form-item label="主机名" prop="name">
                <el-input v-model="input.name" />
            </el-form-item>

            <el-form-item label="主机地址" prop="host">
                <el-input v-model="input.host" placeholder="127.0.0.1"/>
            </el-form-item>

            <el-form-item label="端口号" prop="port">
                <el-input-number v-model="input.port" :controls="false"/>
            </el-form-item>

            <el-form-item label="启用" prop="disabled">
                <el-switch
                    v-model="input.disabled"
                    :active-value="false"
                    :inactive-value="true">
                </el-switch>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible', false)">取 消</el-button>
            <el-button type="primary" @click="onConfirm">确 定</el-button>
        </span>

    </el-dialog>
</template>

<script>
export default {
    name: 'CreateHostDialog',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            input:{
                name: '',
                host: '',
                port: 3000,
                disabled: false
            },
            rules: {
                name: [{required: true, message: '主机名不能为空', trigger:'blur'}],
                host: [{required: true, message: '主机地址不能为空', trigger:'blur'}]
            }
        }
    },
    methods:{
        onConfirm(){
            if(this.$refs['form'].validate((valid) => {
                if(valid){
                    this.$emit('confirm', Object.assign({}, this.input));
                    this.$emit('update:visible', false);
                }
            }));
        },
        onOpen(){
            if(this.$refs['form'])
                this.$refs['form'].resetFields();
        }
    }
}
</script>
