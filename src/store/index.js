import Vue from "vue";
import Vuex from "vuex";
// import state from "./state"
// import mutations from "./mutations"
// import actions from "./actions"
// import getters from "./getters"
import Total from "./modules/Total/index";
import Modern from "./modules/Modern/index";
import Agricul from "./modules/Agricul/index";
import Fishing from "./modules/Fishing/index";
import User from "./modules/User/index";
import HighTech from "./modules/HighTech/index";
import Safety from "./modules/Safety/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Total: Total,
    Modern: Modern,
    Agricul: Agricul,
    Fishing: Fishing,
    User: User,
    HighTech: HighTech,
    Safety: Safety,
  },
});
