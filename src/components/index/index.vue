<template>
    <div>
        <lyheader/>
        <lyintroduce/>
        <lyfooter/>
    </div>

</template>
<script>
import lyheader from '../public/header.vue'
import lyfooter from '../public/footer.vue'
import lyintroduce from '../public/introduce.vue'

export default {
    name:'index',
    components:{
        lyheader,
        lyintroduce,
        lyfooter
    },
    methods:{
        readT:function(){
            axios.get('/static/user.json')
            .then(response => {
            console.log(response.data.inio)
            })
            .catch(error => {
            console.log(error)
            })
        },
        add:function(){
            this.$store.commit('aa')
        }
    }
}
</script>
<style scoped>

</style>