import { createApp } from "vue"
import App from "@src/components/App.vue"
import router from '@src/ts/router';

const app = createApp(App);
app.use(router);
app.mount("#app");
