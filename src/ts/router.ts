import { createRouter,createWebHashHistory } from 'vue-router';
import Home from "@src/components/pages/Home.vue";
import Page1 from "@src/components/pages/Page1.vue";
import Page2 from "@src/components/pages/Page2.vue";

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/Page1', name: 'page1', component: Page1 },
    { path: '/Page2', name: 'page2', component: Page2 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
