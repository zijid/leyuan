<template>
<div id="phb">
    <div class="block">
        <el-carousel height="300px">
        <el-carousel-item v-for="item in items" :key="item">
            <div class="small" v-html="item"></div>
        </el-carousel-item>
        </el-carousel>
    </div>
    <el-card class="box-card">
        <div v-for="o in cards" :key="o">
        <div class="card">{{'列表内容 ' + o }}</div>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                `
                    <p>第一</p>
                    <p>aaa</p>
                `,
                `
                    <p>第二</p>
                    <p>bbb</p>
                `,
                `
                    <p>第三</p>
                    <p>ccc</p>
                `

            ],
            cards:["a","b","c","d","e","f","b","c","d","e","f","c","d","e","f","b","c","d","e","f","c","d","e","f","b","c","d","e","f"]
        }
    }

}
</script>

<style scoped>
#phb{height: 100%;}
#phb .box-card{
    height: calc( 100% - 300px);
}
#phb .small{
    box-sizing: border-box;
    padding: 20px;
}
#phb .small>>>p{
    text-align: center;
    color:#fff;
    font-size: 24px;
}
.box-card{counter-reset:list;overflow-y: auto;}
.box-card .card::before{counter-increment:list;content: counter(list);}

.box-card::-webkit-scrollbar{/*整个滚动条*/
    width: 5px;
    background-color:rgb(255 255 255 / 0%);
}
.box-card::-webkit-scrollbar-thumb{/*滚动条*/
    background-color:rgb(66 66 66);
    border-radius: 5px;
}
.box-card::-webkit-scrollbar-button{/*上下按钮*/
height:0;
}
</style>