
import { Module } from 'vuex';

import { RootState } from './index';

const sampleState = {
    page1: 'page1State',
    page2: 'page2State',
};

export type SampleStateType = typeof sampleState;


export const sampleModule: Module<SampleStateType, RootState> = {
    state: sampleState,
    mutations: {},
    actions: {},
}
