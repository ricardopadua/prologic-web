import { createStore } from 'vuex';

import pathology from './modules/Register/store.pathology';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    pathology,
  },
});
