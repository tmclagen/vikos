import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollPosY: 0,
    cursorPointer: false,
    contacts: {
      phone: '077-216-55-50',
      email: 'vikos@vikos-ltd.com',
      address: 'Hnotea 5* POB 220* Mazor',
    },
    projects: [
      {
        id: 'luxury-residences-tower',
        name: 'Luxury Residences Tower',
        location: 'Tel Aviv',
        style: 'Modern',
        size: '120',
        info: 'Luxury residences by the seashore. Finishing work at high level combining carpentry & unique metalcraft.',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tags: ['modern'],
        gridType: 1,
      },
      {
        id: 'luxury-residences-tower-2',
        name: 'Luxury Residences Tower',
        location: 'Tel Aviv',
        style: 'Modern',
        size: '260',
        info: 'Luxury residences by the seashore. Finishing work at high level combining carpentry & unique metalcraft.',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tags: ['modern'],
        gridType: 2,
      },
      {
        id: 'ceos-office',
        name: 'Ceo\'s Office',
        location: 'Tel Aviv',
        style: 'Country',
        size: '120',
        info: 'Building a CEO\'s Office for a leading Entrepreneurial company.',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tags: ['country'],
        gridType: 3,
      },
      {
        id: 'triplex-apartment',
        name: 'Triplex apartment',
        location: 'Netanya',
        style: 'Modern – Classic',
        size: '1800',
        info: 'Luxury Triplex apartment by the seashore. Execution of swimming pool at top level, 2 elevators & big wide windows 4.3m high.',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tags: ['modern', 'classic'],
        gridType: 2,
      },
      {
        id: 'showroom',
        name: 'ShowRoom',
        location: 'Bnei Brak',
        style: 'Modern',
        size: '500',
        info: 'Showroom of a leading company in the sale of natural stone.',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        tags: ['modern'],
        gridType: 1,
      },
    ],
  },
  mutations: {
    CURSOR_POINTER(state, value) {
      state.cursorPointer = value;
    },
    UPDATE_SCROLL_Y(state, value) {
      state.scrollPosY = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
