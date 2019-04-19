import Vue from 'vue'
import uuidv4 from 'uuid/v4'

const state = {
    all: {},
    allIds: [],
    allMsgIds: [],
};

const mutations = {

};

const actions = {
  seed({ rootState }) {
      let convoRef =  rootState.db.collection('conversation');

      convoRef.add({
          created: Date.now(),
          users: ['Priyank', 'John Doe'],
          messages: [
              { id: uuidv4(), text: 'Hi there', sender: 'Priyank', created: Date.now() },
              { id: uuidv4(), text: 'Hi to you too!', sender: 'JohnDoe', created: Date.now() }
          ]
      })
  }
};

export default {
    namespaced: true, state, mutations, actions
}
