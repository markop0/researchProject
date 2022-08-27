import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  consoleErr: string;
  consoleMsg: string;
  ffFilename: string;
  ffFileOk: boolean;
  ffFileOkPre: boolean;
  ffFilesize: number;
  ffProgress: number;
  timeRecord: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    consoleErr: "",
    consoleMsg: "",
    ffFilename: "",
    ffFileOk: false,
    ffFileOkPre: false,
    ffFilesize: 0,
    ffProgress: 0,
    timeRecord: 0,
  },
  mutations: {
    setTR(state, data) {
      state.timeRecord = data;
    },
    consoleErr(state, data) {
      state.consoleErr = data;
    },
    consoleMsg(state, data) {
      state.consoleMsg = data;
    },
    ffFilename(state, data) {
      state.ffFilename = data;
    },
    ffFileOk(state, data) {
      state.ffFileOk = data;
    },
    ffFileOkPre(state, data) {
      state.ffFileOkPre = data;
    },
    ffFilesize(state, data) {
      state.ffFilesize = data;
    },
    ffProgress(state, data) {
      if (data > 0 && data < 101) {
        state.ffProgress = data;
      }
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
