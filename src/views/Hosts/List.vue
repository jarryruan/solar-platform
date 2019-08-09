<template>
    <div class="insects">
        <create-host-dialog :visible.sync="dialogVisible.create" @confirm="createHost({host: $event})" />

        <div class="button-bar">
            <el-button type="primary" size="small" @click="setCreateDialogVisible(true)" >添加主机</el-button>
        </div>
        
        <el-table :data="hostList">
            <el-table-column prop="name" label="主机名" />
            <el-table-column prop="host" label="主机地址" />
            <el-table-column prop="port" label="端口" /> 
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.disabled" type="primary" size="mini" @click="triggerAvailability({index: scope.$index})">启用</el-button>
                    <el-button v-else size="mini" @click="triggerAvailability({index: scope.$index})">禁用</el-button>
                    <el-button type="danger" size="mini" @click="deleteHost({index: scope.$index})">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
const namespace = 'Hosts';
import { mapActions, mapState } from 'vuex';
import CreateHostDialog from '@/components/Hosts/CreateHostDialog.vue'

export default {
    name: 'List',

    components:{
        'create-host-dialog': CreateHostDialog
    },

    data(){
        return {
            dialogVisible:{
                create: false
            }
        }
    },

    computed:{
        ...mapState(namespace, ['hostList'])
    },

    methods:{
        ...mapActions(namespace, ['deleteHost', 'createHost', 'triggerAvailability']),
        
        setCreateDialogVisible(visible){
            this.$set(this.dialogVisible, 'create', visible);
        }
    }
}
</script>

<style scoped>
.button-bar{
    margin-bottom: 1rem;
}
.button-bar .el-button{
    margin-right: 5px;
}
</style>
