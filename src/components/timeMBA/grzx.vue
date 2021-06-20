<template>
<div id="grzx">
    <div id="date">
        <div class="block">
            <span class="demonstration">开始时间</span>
            <el-date-picker v-model="dateStart" type="datetime" placeholder="选择日期时间" size="mini"></el-date-picker>
        </div>

        <div class="block">
            <span class="demonstration">结束时间</span>
            <el-date-picker v-model="dateEnd" type="datetime" placeholder="选择日期时间" size="mini"></el-date-picker>
        </div>
        
        <div class="block">
            <span>学习时间</span> <el-input v-model="studyTime" placeholder="请输入内容" size="mini" class="time" inline></el-input>
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
        <span class="time">本次学习了30分钟，开始时间19：22：12</span><el-button type="primary" round class="send">保存</el-button>
    </div>
</div>
</template>

<script>
export default {

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