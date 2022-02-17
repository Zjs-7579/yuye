export default {
  UserName(state, res) {
    state.userInfo.userName = res.user_name;
  },
  UninInfo(state, res) {
    state.userInfo.UninInfo = res;
  },
};
