import { createApp } from 'vue';
import '@/assets/css/global.less';
import Antd from 'ant-design-vue';

import App from '@/App.vue';
import './registerServiceWorker';
import router from '@/router';
import store from '@/store';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
app.mount('#app');
