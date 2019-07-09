
export default {
  ADD_USER(state, user) {
    const newUser = Object.assign({}, user);
    state.userInfo = newUser;
  },
};
