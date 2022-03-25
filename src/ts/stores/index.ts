
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import { sampleModule, SampleStateType } from './sample';


const rootState = {
    version: 1.0,
};

export type RootState = {
    version: number;
    sampleModule: SampleStateType;
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    state: rootState as RootState,
    modules: {sampleModule},
});

export const useStore = () => {
    return baseUseStore(key);
};
