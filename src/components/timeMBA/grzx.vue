<template>
<div id="grzx">
    <div id="date">
        <div class="block">
            <span class="demonstration">开始时间</span>
            <el-date-picker v-model="dateStart" type="datetime" @change="chanerTime(1)" placeholder="选择开始时间" size="mini"></el-date-picker>
        </div>

        <div class="block">
            <span class="demonstration">结束时间</span>
            <el-date-picker v-model="dateEnd" type="datetime" @change="chanerTime(2)"placeholder="选择结束时间" size="mini"></el-date-picker>
        </div>
        
        <div class="block">
            <span>学习时间</span> <el-input v-model="studyTime" @change="chanerTime(3)"placeholder="学习了多少分钟" size="mini" class="time" inline></el-input>
        </div>
    </div>
    <div id="ms">
        <p>标题</p>
        <el-input placeholder="请输入标题" v-model="input1">              
        </el-input>
        <p>描述</p>
        <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea">
        </el-input>
        <span class="time">本次学习了{{studyTime}}分钟，开始时间{{dateStart|dateShow}}</span><el-button type="primary" round class="send" @click="send">保存</el-button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            dateStart:Date.now()-30*1000*60,
            dateEnd:Date.now(),
            studyTime:30,
            input1:"",
            textarea:""
        }
    },
    methods:{
        chanerTime(index){
            switch(index){
                case 1:
                    if(this.dateEnd&&this.dateStart)
                    this.studyTime=parseInt((this.dateEnd-this.dateStart)/1000/60)
                    break;
                case 2:
                    if(this.dateEnd&&this.dateStart)
                    this.studyTime=parseInt((this.dateEnd-this.dateStart)/1000/60)
                    break;
                case 3:
                    this.dateStart=(this.dateEnd-this.studyTime*1000*60)
                    break;
            }
        },
        send(){
            if(this.dateStart&&this.dateEnd&&this.input1&&this.textarea){
                let user=this.$store.state.user
                axios.post('/timeSave',{userId:user.userId,userName:user.userName,timeStart:this.dateStart,timeEnd:this.dateEnd,title:this.input1,things:this.textarea})
                .then(response => {
                    if(response.data.err){
                        this.input1=""
                        this.textarea=""
                        alert("已保存")
                    }else{
                        alert(response.data.msg)
                    }
                })
            }else{
                alert("内容不完整，请继续输入")
            }

        }
    }

}
</script>

<style scoped>
#grzx{padding: 1%;}
#grzx>div{
    width: 48%;
    margin: 1%;
    float: left;
    padding: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
#grzx #date{
    background: #ad0000;
    color: #fff;
}
#grzx #date .block{
    padding: 4px;
}
#grzx #date .block .time{width: 40%;}
.send{
    background-color: #FF9800;
    border-color: #FF9800;
    margin: 10px auto;
    float: right;
}
#ms .time{
    color: #dadada;
    font-size: 12px;
}
.send:hover{
    background-color: #e48900;
    border-color: #FF9800;
}
.send:active{
    background-color: #fae900;
    border-color: #FF9800;
}
#grzx #ms{
    background: #00aaf8;
    color: #fff;
}
</style>>

</style>