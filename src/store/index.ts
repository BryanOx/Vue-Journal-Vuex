import { createStore } from "vuex";

import journal from "@/modules/daybook/store/journal";

/**
 * Creating a new Store Instance
 */
const store: any = createStore({
    modules: {
      journal,
    },
  });
  
  export default store;
  
