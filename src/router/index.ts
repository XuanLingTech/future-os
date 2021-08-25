import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {BackLayout} from "../layouts"
import SystemInfo from '../views/System/SystemInfo.vue'
import Install from '../views/Install/Install.vue'
import AppStore from '../views/AppStore/AppStore.vue'
import Settings from '../views/Settings/Settings.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/os',
        name: 'OS',
        component: BackLayout
    },
    {
        path: '/os/system/info',
        name: 'SystemInfo',
        component: SystemInfo,
    },
    {
        path: '/os/install',
        name: 'Install',
        component: Install,
    },
    {
        path: '/os/AppStore',
        name: 'AppStore',
        component: AppStore,
    },
    {
        path: '/os/Settings',
        name: 'Settings',
        component: Settings,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (typeof (to.meta.title) === 'string') {
        document.title = to.meta.title;
    }
    window.scrollTo(0, 0);
    next();
});

export default router
