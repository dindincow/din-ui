<template>
    <div>
        
        <label class="din-checkbox" :class="{'is-checked':isChecked }">
            <span class="din-checkbox__input">
                <span class="din-checkbox__inner"></span>
                <input
                    type="checkbox"
                    class="din-checkbox__original"
                    :value="label"
                    :name="name"
                    v-model="model"
                />
            </span>
            <span class="din-radio__label">
                <slot>{{ label }}</slot>
            </span>
        </label>

    </div>
</template>
<script>
export default {
    name:"DinCheckbox",
    inject:{
        checkboxGroup:{
            default:''
        }
    },
    computed:{
        isGroup(){
            return !!this.checkboxGroup
        },
        isChecked(){
            return this.isGroup ? this.model.includes(this.label) : this.model
        },
        model:{
            get(){
                return this.isGroup ? this.checkboxGroup.value : this.value
            },
            set(value){
                this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
            }
        }
    },
    props:{
        value:{
            type:Boolean,
            default:false
        },
        name:{
            type:String,
            default:''
        },
        label:{
            type:String,
            default:''
        },
    }
}
</script>
<style scoped lang="scss">
.din-checkbox {
    //color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .din-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .din-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
            background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
            &:after {
                // 这里使用边框实现对勾的样式
                box-sizing: content-box;
                content: '';
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                width: 3px;
                position: absolute;
                left: 4px;
                top: 1px;
                transform: rotate(45deg) scaleY(1);
                transition: transform 0.15s ease-in 0.05s;
                transform-origin: center;
            }
        }
        .din-checkbox__original {
            //opacity: 0;
            // outline: none;
            // position: absolute;
            // margin: 0;
            // width: 0;
            // height: 0;
            // z-index: -1;
        }
    }
    .din-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}

// 父元素的最后的一个子元素din-checkbox取消margin-right，也包括嵌套子元素的最后一个d-checkbox
.din-checkbox:last-of-type {
    margin-right: 0;
}
.din-checkbox.is-checked {
    .din-checkbox__inner {
        background-color: #409eff;
        border-color: #409eff;
        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }
    .din-checkbox__label {
        color: #409eff;
    }
}
.din-checkbox.is-disabled {
    .din-checkbox__inner {
        background-color: #edf2fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
    }
    span.din-checkbox__label {
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
.din-checkbox.is-mimicry {
    .din-checkbox__inner {
        box-shadow: inset 3px 2px 4px #cacaca48,
        inset -3px -2px 4px rgba(255, 255, 255, 0.377);
    }
}
</style>