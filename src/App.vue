<template>
    <div id="app">
        <!------------------------------- Dialog ----------------------------------->
        <!---Dialog 可以用傳屬性的方式 也可以用 slot 方式--->
        <!-- <din-dialog>
            <template v-slot:title>
                <span>肚子脹脹超人</span>
            </template> 
        </din-dialog> -->
        <din-dialog title="溫馨提示" width="60%" top="200px" :visible.sync="visible">
            東京奧運開幕在即，21日有四名參賽者因為確診染新冠，奧運夢碎?
            <ul>
                <li>選手</li>
                <li>火鍋</li>
                <li>肚子餓惡</li>
            </ul>
                
            <template v-slot:footer>
                <din-button round @click="visible=false">YES</din-button>
                <din-button round type="primary" @click="visible=false">NO</din-button>
            </template>
        </din-dialog>
      
        <div class="left">
            <!------------------------------- Botton ----------------------------------->
            <h3>Botton</h3>
            <div class="row row1">
                <din-button @click="fun">default</din-button>
                <din-button type="primary">primary</din-button>
                <din-button type="success">Success</din-button>
                <din-button type="warning">Warning</din-button>
                <din-button type="danger">Danger</din-button>
                <din-button type="info">Info</din-button>
            </div>

            <div class="row row2">
                <din-button plain>default</din-button>
                <din-button plain type="primary">primary</din-button>
                <din-button plain type="success">Success</din-button>
                <din-button plain type="warning">Warning</din-button>
                <din-button plain type="danger">Danger</din-button>
                <din-button plain type="info">Info</din-button>
            </div>
            <div class="row row3">
                <din-button round >default</din-button>
                <din-button round plain type="primary">primary</din-button>
                <din-button round plain type="success">Success</din-button>
                <din-button round plain type="warning">Warning</din-button>
                <din-button round plain type="danger">Danger</din-button>
                <din-button round plain type="info">Info</din-button> 
            </div>
             <div class="row row4">
                <din-button circle>叮</din-button>
                <din-button circle type="primary" icon="icon-search"></din-button>
                <din-button round type="success" icon="icon-Serviceusers">叮</din-button>
                <din-button round disable type="warning" icon="icon-food">禁用</din-button>
                <din-button round type="danger" icon="icon-food1">叮</din-button>
                <din-button plain type="info" icon="icon-streamlist" @click="fun">click Me</din-button>
            </div>
            <div class="row row5">
                <din-button circle icon="icon-search"></din-button>
                <din-button circle type="primary" icon="icon-search"></din-button>
                <din-button circle type="success" icon="icon-Serviceusers"></din-button>
                <din-button circle type="warning" icon="icon-food"></din-button>
                <din-button circle type="danger" icon="icon-food1"></din-button>
                <din-button circle type="info" icon="icon-streamlist"></din-button>
            </div>
            <h3>Switch</h3>
            <div class="row row6">
                <din-switch v-model="active" name="userName"></din-switch> 
                <din-switch v-model="active" :activeColor="'#ec9e34'" :inactiveColor="'green'"></din-switch>
            </div>
            <h3>Radio</h3>
           <h6>單選 radio</h6>
            <div class="row row6">
                <din-radio lable="1" v-model="gender">女</din-radio> 
                <din-radio lable="0" v-model="gender">男</din-radio> 
            </div>
            <!-- <h6>屬性lable當顯示名稱</h6>
            <div class="row row6">
                <din-radio lable="1" v-model="gender"></din-radio> 
                <din-radio lable="0" v-model="gender"></din-radio> 
            </div>  -->
            <h6>群組選單</h6>
            <din-radio-group v-model="gender">
                <din-radio lable="1">女</din-radio> 
                <din-radio lable="0">男</din-radio> 
            </din-radio-group>
            <h3>勾選框 checkbox</h3>
            <div class="row row7">
                <din-checkbox v-model="checkboxActive">吃晚餐</din-checkbox>
                <div>=========================</div>
                <din-checkbox-group v-model="hobby">
                    <din-checkbox label="回家"></din-checkbox> 
                    <din-checkbox label="睡覺"></din-checkbox> 
                    <din-checkbox label="燙頭"></din-checkbox> 
                </din-checkbox-group>
            </div>
            <h6>整體表單</h6>
            <din-form :model="model" labelWidth="80px">
                <din-form-item label="用戶名">
                    <din-input placeholder="請輸入用戶名" v-model="model.userName"></din-input>
                </din-form-item>
                 <din-form-item label="選擇">
                    <din-switch v-model="model.active"></din-switch>
                </din-form-item>
                 <din-form-item label="用戶名">
                    <din-input placeholder="請輸入用戶名"></din-input>
                </din-form-item>
            </din-form> 
        </div>
        <div class="right">
            <h3>Dialog</h3>
            <din-button round type="primary" icon="icon-food" @click="visible=true">點 擊 彈 出 對 話 框 </din-button> 
            <h3>Input</h3>
            <p> 輸入文字 </p>
            <din-input placeholder="please text..." name="username" v-model="username" clearable></din-input>
            <p> 輸入密碼 </p>
            <din-input type="password" name="username" v-model="myPassword" show-password></din-input>
            <p> 禁用輸入 </p>
            <din-input placeholder="please text..." type="password" name="username" disabled></din-input>
        </div>
      
    </div>
</template>
<script>

export default {
    components:{
       
    },
    data(){
        return{
            visible:false,
            qq:false,
            username:"jessica",
            myPassword:'',
            active:false,
            gender:1,
            checkboxActive:false,
            hobby:["回家"],
            model:{
                userName:'',
                active:true
            }
        }
    },
    methods:{
        fun(){
            console.log("CLICK!!")
        }
    }
    
}
</script>

<style lang="scss">
#app{
    width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
}

h3{
    color: #f2f2f2;
    font-size: 36PX;
    font-family: monospace;
    margin: 30px 0;
}
h6{
    margin: 0 0 20px 0;
    color: #dbdbdb;
    font-size: 21px;
}

.left{
    width: 55%;
    .row{
        display: flex;
        // justify-content: space-between;
        margin-bottom: 30px;
        .din-button{
            margin-right:20px;
        }
    }
}
.right{
    width: 40%;
}
.radioBox{
    display: flex;
}
p{
    color: #dbdbdb;
} 
  
.din-button{
    margin:15px;
}
.din-input{
    width: 300px !important;
    margin-bottom: 20px;
}
.din-switch{
      margin-right:15px;
}
.row7{
    flex-direction: column;
      color: #dbdbdb;
}
.din-checkbox-group{
     color: #dbdbdb;
}

</style>
