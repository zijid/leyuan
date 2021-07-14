<template>
    <div id="index">
        <div class="phb">
            <h2>上周学习时间排行</h2>
            <ul>
                <li><span class="one">1.</span><span class="oneName" title="我是一个长名字八九十">我是一个长名字八九十</span><span class="oneTime">上周学了1时6分钟</span></li>
                <li><span class="two">2.</span><span class="twoName" title="昵称2">昵称2</span><span class="twoTime">上周学了1时4分钟</span></li>
                <li><span class="three">3.</span><span class="threeName" title="昵称3">昵称3</span><span class="threeTime">上周学了57分钟</span></li>
            </ul>
        </div>
        <div class="gr">
            <h2>我的学习总览</h2>
            <ul>
                <li><span class="one">本周学习时间：</span><span class="oneTime">1时6分钟</span></li>
                <li><span class="two">上周学习时间：</span><span class="twoTime">1时4分钟</span></li>
                <li class="gd"><a href="#">记录更多学习</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[],
            thisInfo:[]
        }
    },
    mounted(){
        axios.get("/phb").then(
            (Data)=>{
                let data=Data.data;//data=[]第一层没个用户的全部信息
                let userInfoAll=[]
                let thisTiem=new Data()
                thisTiem.getDay()
                thisTiem.setHours(0)
                thisTiem.setMinutes(0)
                thisTiem.setSeconds(0)
                thisTiem.setMilliseconds(0)

                let oneDay=1000*60*60*24//一天的时间
                let day=thisTiem.getDay()//0 星期天
                if(day>0){
                    

                }else{
                    thisTiem
                }

                // let day={min:"",max:""}//这周时间范围
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
            }
        )
    }

}
</script>

<style scoped>
#index{padding: 1%;}
#index>div{
    width: 48%;
    margin: 1%;
    float: left;
    background: #666666;
    color: #fff;
    -webkit-box-shadow: 3px 3px 0px 0px #FFEB3B;
    box-shadow: 3px 3px 0px 0px #FFEB3B;
    padding: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

</style>