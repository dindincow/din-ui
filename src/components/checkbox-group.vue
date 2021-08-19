<template>
    <div class="din-checkbox-group">
       <slot></slot>
    </div>
</template>
<script>

export default {
    name:"DinCheckboxGroup",
    provide(){
        return{
            checkboxGroup:this
        }
    },
    props:{
        value:{
            type:Array
        }
    }
   
}
</script>
<style scoped lang="scss">

</style>