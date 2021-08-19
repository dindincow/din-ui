<template>
    <div class="din-form-item">
       
         <label class="din-form-item__label" :style="{width:this.form.labelWidth}">{{label}}</label> 
        <!-- <label class="din-form-item__label" >{{label}}</label> -->
        <div class="din-form-item__content">
            <slot></slot>
        </div>
        
    </div>
</template>
<script>


export default {
    name:"DinFormItem",
    inject:['form'],
    props:{
        label:{
            type:String,
        },
    },
    mounted(){
        console.log("---------",this.form)
    }
}
</script>
<style lang="scss">
.din-form-item{
    margin-bottom: 25px;
    .din-form-item__label{
        text-align: right;
        float: left;
        vertical-align: middle;
        font-size: 14px;
        color: #ccc;
        line-height: 40px;
        padding: 0 20px 0 0;
        box-sizing: border-box;
    }
    .din-form-item__content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>