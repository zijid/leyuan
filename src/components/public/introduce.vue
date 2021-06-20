<template>
  <div>
    <el-row id="introduce">
        <el-col :span="6"><div id="left">
            
            <div>
                <div>网站日志</div>
                <ul id="rz">
                    <li v-for="data in list" :key="data.id" >
                        <el-row align="middle" type="flex">
                            <el-col :span="2" class="div_id">
                                <div class="id">{{data.id}}</div>
                            </el-col>
                            <el-col :span="20">
                                <div class="data">{{data.userId}}:{{data.msg}}</div>
                                <div class="date">{{data.date|dateShow}}</div>
                            </el-col>
                        </el-row>
                    </li>

                </ul>
            </div>

        </div></el-col>
        <el-col :span="18">
            <div id="right">
                <box :value="box.value" :link="box.link"/>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import box from './box.vue'
export default {
    name:'introduce',
    components:{
        box
    },
    data(){
        return {
            box:{
                value:"时间管理",
                link:"/timeMBA"
            }
        }
    },
    computed:{
        list(){
            return this.$store.state.list;
        }
    },
    methods:{

    }
    
}
</script>

<style scoped>
#introduce,#introduce>div>div{height:70vh;}
#rz{list-style-type: none;padding:0;overflow-y:scroll;height: calc( 70vh - 50px );}
#rz::-webkit-scrollbar{
    width: 0;
}
#rz li{background:#dcdcdc;border-bottom:1px solid #c7c7c7;padding:0;}
#rz .data{font-size:14px;font-weight:bold;color:#666;}
#rz .date{font-size:12px;color:rgb(170, 170, 170);}
#rz .id{font-size:12px;text-align: center;}

#left{padding: 10px 0 0 10px;box-sizing: border-box;background:#e6e6e6;}
#right{background: #ccc;color: #666;padding: 20px;box-sizing: border-box;overflow: hidden;overflow-y:auto;}
</style>
