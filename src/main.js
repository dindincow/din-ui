import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/main.scss";
import "./assets/fonts/iconfont.css";
import DinButton from './components/button'
import DinDialog from './components/dialog'
import DinInput from './components/input'
import DinSwitch from './components/switch'
import DinRadio from './components/radio'
import DinRadioGroup from './components/radio-group'
import DinCheckbox from './components/checkbox'
import DinCheckboxGroup from './components/checkbox-group'
import DinForm from './components/form'
import DinFormItem from './components/form-item'

Vue.config.productionTip = false;
Vue.component(DinButton.name,DinButton);
Vue.component(DinDialog.name,DinDialog);
Vue.component(DinInput.name,DinInput);
Vue.component(DinSwitch.name,DinSwitch);
Vue.component(DinRadio.name,DinRadio);
Vue.component(DinRadioGroup.name,DinRadioGroup);
Vue.component(DinCheckbox.name,DinCheckbox);
Vue.component(DinCheckboxGroup.name,DinCheckboxGroup);
Vue.component(DinForm.name,DinForm);
Vue.component(DinFormItem.name,DinFormItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
