import { createStore } from 'vuex'

export default createStore({
	state: {
		isShowMenu: false,  // 菜单显示
		isShowPlayer: true
	},
	mutations: {
		chageIsShowMenu(state, flag) {
			state.isShowMenu = flag
		}
	}
})