/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

export const actions: ActionTree<AccountStateInterface, StateInterface> = {
  async login({ dispatch, commit }, { account, authenticator, returnUrl }) {
    debugger;
    commit('setLoadingWallet', authenticator.getStyle().text);
    await authenticator.init();
    if (!account) {
      const requestAccount = await authenticator.shouldRequestAccountName();
      if (requestAccount) {
        // await dispatch('fetchAvailableAccounts', idx);
        commit('setRequestAccount', true);
        return;
      }
    }
    const users = await authenticator.login(account);
    if (users.length) {
      const account = users[0];
      const accountName = await account.getAccountName();
      commit('setAccountName', accountName);
      localStorage.setItem('autoLogin', authenticator.constructor.name);
      localStorage.setItem('account', accountName);
      localStorage.setItem('returning', 'true');
      commit('setLoadingWallet');
    }
  },
  logout({ commit }) {
    commit('setAccountName');
    localStorage.removeItem('autoLogin');
  }
};
