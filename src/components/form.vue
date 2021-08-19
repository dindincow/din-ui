<template>
    <div class="din-form">
        <slot></slot>
    </div>
</template>
<script>


export default {
    name:"DinForm",
    props:{
        model:{
            type:Object,
            require:true
        },
        labelWidth:{
            type:String,
            default:'80px'        
        } 
    },
    provide(){
        return{
            form:this
        }
    }
}
</script>
<style>
.din-form{
    width: 450px;
    border: 1px solid #466177;
    padding: 30px 20px;
    border-radius: 20px;
    box-sizing: border-box;
}
   
</style>
