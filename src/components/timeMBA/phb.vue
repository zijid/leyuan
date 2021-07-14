<template>
<div id="phb">
    <div class="block">
        <el-carousel height="300px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
            <div class="small">
                <h1>
                    排名:{{index+1}}
                </h1>
                <div>
                    用户名:{{item.userName}}
                </div>
                <div>
                    总学习时间:{{item.total|time}}
                </div>
            </div>
        </el-carousel-item>
        </el-carousel>
    </div>
    <el-card class="box-card">
        <div v-for="o of cards" :key="o.userId">
        <div class="card">{{o.userName}}:{{o.total|time}}</div>
        </div>
    </el-card>
</div>
</template>

<script>
export default {
    data(){
        return {
            items:[],
            cards:[]
        }
    },
    mounted(){
        axios.get("/phb").then(
            (Data)=>{
                let data=Data.data;//data=[]第一层没个用户的全部信息
                let userInfoAll=[]
                data.forEach(user => {
                    let userInfo={
                        userId:user[0].userId,
                        userName:user[0].userName,
                        list:[],
                        total:0
                    }
                    for(let info of user){
                        let studyTime=info.timeEnd-info.timeStart
                        userInfo.total+=studyTime
                        userInfo.list.push(
                            {
                                timeEnd:info.timeEnd,
                                timeStart:info.timeStart,
                                studyTime,
                                title:info.title,
                                things:info.things
                            }
                        )
                    }
                    userInfoAll.push(userInfo)
                });
                for(let a=0;a<userInfoAll.length;a++){
                    userInfoAll.sort((a,b)=>a.total<b.total?1:-1)
                }
                console.log(userInfoAll)
                for(let a of userInfoAll){
                    if(this.items.length<3){
                        this.items.push(
                            {
                                userName:a.userName,
                                total:a.total
                            })
                    }
                    this.cards.push({
                        userName:a.userName,
                        total:a.total
                    })
                }
// createTime: 1625371010375
// id: 1
// things: "123"
// timeEnd: 1625369740771
// timeStart: 1625367940771
// title: "1"
// userId: "1"
// userName: "1"
            }
        )
    }

}
</script>

<style scoped>
#phb{height: 100%;}
#phb .box-card{
    height: calc( 100% - 300px);
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
#phb .small{
    box-sizing: border-box;
    padding: 0 20%;
}
.small h1{
    color:coral;
}
.small div{
    padding: 20px;
    font-size: 14px;
    color: #fff;
}
</style>