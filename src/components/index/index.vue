<template>
    <div>
        <lyheader/> 
        <lyintroduce/>
        <lyfooter :bg="footer.bgColor" :color="footer.color"/>
    </div>

</template>
<script>
import lyheader from '../public/header.vue'
import lyfooter from '../public/footer.vue'
import lyintroduce from '../public/introduce.vue'

export default {
    name:'index',
    data() {
      return {
        footer:{bgColor:"#303133",color:"#fff"}
      };
    },
    components:{
        lyheader,
        lyintroduce,
        lyfooter
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>