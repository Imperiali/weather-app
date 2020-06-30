import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import App from "@/App";
import Vuetify from "vuetify"

const localVue = createLocalVue()

localVue.use(Vuex)

describe('App.vue', () => {

  let actions
  let store
  let getters
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      resolveUrlmage: jest.fn(),
      resolveLocalAddress: jest.fn(),
    }
    getters = {
      getForecast: () => {
        return {status: 'ERROR'}
      },
      getImageUrl: () => {}
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('Dispatches "resolveLocalAddress" when created', () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
      vuetify
    })
    wrapper.trigger('create')
    expect(actions.resolveLocalAddress).toHaveBeenCalled()
  })
  it('Dispatches "resolveUrlmage" when created', () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
      vuetify
    })
    wrapper.trigger('create')
    expect(actions.resolveUrlmage).toHaveBeenCalled()
  })
})
