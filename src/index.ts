import { createApp } from "vue"
import App from "@src/components/App.vue"
import router from '@src/ts/router';
import {store, key} from '@src/ts/stores';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount("#app");
