import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		fontSize: '',
		lineHeight: '',
		background: ''
	},
	mutations: {
		setFontSize(state, res) {
			state.fontSize = res;
		},
		setLineHeight(state, res) {
			state.lineHeight = res;
		},
		setBackground(state, res) {
			state.background = res;
		}
	},
	actions: {
		
	}
})

export default store
