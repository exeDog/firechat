const state = {
    all: {},
    currentUser: 'Priyank',
};

const mutations = {

};

const actions = {
    seed({ rootState }) {
        let userRef = rootState.db.collection('users');

        userRef.doc('Priyank').set({
            firstName: 'Priyank',
            lastName: "Rege",
        });

        userRef.doc('JohnDoe').set({
            firstName: 'John',
            lastName: 'Doe',
        });

        userRef.doc('JaneDoe').set({
            firstName: 'Jane',
            lastName: 'Doe',
        });
    }
};

export default {
    namespaced: true, state, mutations, actions
}
