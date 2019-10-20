import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    companies: [],
    regions: [],
  },
  mutations: {
    SET_COMPANIES: (state, companies) => state.companies = companies,
    SET_REGIONS: (state, regions) => state.regions = regions,
  },
  actions: {
    async loadRegions({ commit }) {
      const companies = (await axios.get('https://resourceprojects.org/api/country?countryName=Russian+Federation')).data.result[3];
      const regions = (await axios.get('https://resourceprojects.org/api/country?countryName=Russian+Federation')).data.result[1];

      commit('SET_COMPANIES', companies);
      commit('SET_REGIONS', regions);

      return { companies, regions };
    }
  },
  getters: {
    getCompanies: state => state.companies,
    getRegions: state => state.regions,
  },
  modules,
});
