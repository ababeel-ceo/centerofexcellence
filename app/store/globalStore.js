const { proxy } = require("valtio");

export const globalState = proxy({
    activeTab: 0,
})