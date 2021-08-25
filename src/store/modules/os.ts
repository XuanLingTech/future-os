import taskList from "../../config/taskConfig";
import TopMenu from "../../config/menuConfig";

let menu = {
    title: TopMenu.title,
    logo: TopMenu.logo,
    menuList: []
}

const os = {
    state: {
        windowList: [],
        taskList,
        menu
    },

    mutations: {
        openApp: (state: { windowList: any[]; taskList: any[]; }, app: any) => {
            let isOpen = false
            let inTask = false
            let isActive = true
            state.windowList.map(item => {
                if (item.name == app.name) {
                    if (item.active) {
                        item.min = !item.min
                        if (item.min) {
                            item.active = false
                        } else {
                            item.active = true
                        }
                    } else {
                        item.active = true
                        item.min = false
                    }
                    isActive = item.active
                    isOpen = true
                } else {
                    item.active = false
                }
            })
            state.taskList.map(item => {
                if (item.name == app.name) {
                    item.open = true
                    item.active = isActive
                    if (isActive) {
                        item.min = false
                    }
                    inTask = true
                } else if (item.open) {
                    item.active = false
                }
            })
            if (!isOpen) {
                state.windowList.push(app)
            }
            if (!inTask) {
                state.taskList.push(app)
                state.taskList.map(item => {
                    if (item.name == app.name) {
                        item.open = true
                        item.active = isActive
                        if (isActive) {
                            item.min = false
                        }
                        inTask = true
                    } else if (item.open) {
                        item.active = false
                    }
                })
            }
        },
        closeApp: (state: { windowList: { name: any; }[]; taskList: { name: any; active: boolean; open: boolean; }[]; }, app: { name: string; fixed: boolean; active: boolean; open: boolean; }) => {
            if (app.fixed == undefined) {
                app.fixed = false
            }
            state.windowList.map((item: { name: string; }, index: number) => {
                if (item.name == app.name) {
                    state.windowList.splice(index, 1)
                }
            })
            state.taskList.map((item: { name: string; active: boolean; open: boolean; }, index: number) => {
                if (item.name == app.name) {
                    if (app.fixed) {
                        item.active = false
                        item.open = false
                    } else {
                        state.taskList.splice(index, 1)
                    }
                }
            })
        },
        setMenu: (state: { menu: { title: any; logo: any; menuList: any }; }, menu: { title: any; logo: any; menuList: any }) => {
            state.menu.title = menu.title
            state.menu.logo = menu.logo
            state.menu.menuList = menu.menuList
        },
        activeApp: (state: { windowList: { name: any; active: boolean; }[]; taskList: { name: string; active: boolean; }[]; }, app: { name: string; }) => {
            state.windowList.map((item: { name: any; active: boolean; }) => {
                item.active = item.name == app.name;
            })
            state.taskList.map((item: { name: any; active: boolean; }) => {
                item.active = item.name == app.name;
            })
        },
        minApp: (state: { windowList: { name: string; min: boolean; }[]; taskList: { name: string; min: boolean; active: boolean; }[]; }, app: { name: string; min: boolean; }) => {
            state.windowList.map((item: { name: string; min: boolean; }) => {
                if (item.name == app.name) {
                    item.min = true
                }
            })
            state.taskList.map((item: { name: string; min: boolean; active: boolean; }) => {
                if (item.name == app.name) {
                    item.min = app.min
                    item.active = false
                }
            })
        }
    },

    actions: {
        OpenApp({commit}: any, app: { width: string | undefined; height: string; active: boolean; min: boolean; name: any; ico: any; scale: boolean | undefined; menuList: any }) {
            if (app.width == undefined) {
                app.width = '80%'
                app.height = '80%'
            }
            if (app.scale == undefined) {
                app.scale = true
            }
            app.active = true
            app.min = false
            // 打开应用
            commit('openApp', app)
            let menu = {
                title: app.name,
                logo: app.ico,
                menuList: app.menuList
            }
            commit('setMenu', menu)
        },
        CloseApp({commit}: any, app: any) {
            // 关闭应用
            commit('closeApp', app)
            let menu = {
                title: TopMenu.title,
                logo: TopMenu.logo
            }
            commit('setMenu', menu)
        },
        ActiveApp({commit}: any, app: { name: any; ico: any; menuList: any }) {
            // 激活应用
            commit('activeApp', app)
            let menu = {
                title: app.name,
                logo: app.ico,
                menuList: app.menuList
            }
            commit('setMenu', menu)
        },
        MinApp({commit}: any, app: any) {
            commit('minApp', app)
        }
    }
}
export default os
