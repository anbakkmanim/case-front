import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import moduleTodo from './todo/moduleTodo';
import moduleCalendar from './calendar/moduleCalendar';
import moduleChat from './chat/moduleChat';
import moduleEmail from './email/moduleEmail';

Vue.use(Vuex);


export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    todo: moduleTodo,
    calendar: moduleCalendar,
    chat: moduleChat,
    email: moduleEmail,
  },
  strict: process.env.NODE_ENV !== 'production',
});