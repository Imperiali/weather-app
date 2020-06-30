import {createLocalVue, mount} from "@vue/test-utils";
import Vuex from 'vuex'
import InputArea from "@/components/InputArea";
import Vuetify from "vuetify"

const localVue = createLocalVue()

localVue.use(Vuex)

let state
let actions
let store
let wrapper

beforeEach(() => {
  let vuetify = new Vuetify()
  state = {
    region: {
      name: {
        formatted: 'teste'
      }
    }
  }
  actions = {
    resolveInputAddress: jest.fn(),
  }
  store = new Vuex.Store({
    actions,
    state
  })
  wrapper = mount(InputArea, {
    store,
    localVue,
    vuetify,
    mocks: {
      $t: () => {}
    }
  })

})

afterEach(() => {
  wrapper.destroy()
})

describe('InputArea.vue', () => {
  it('Dispatches "resolveInputAddress" when input changes', () => {
    const input = wrapper.find('[data-test="inputTest"]')
    input.trigger('change')
    expect(actions.resolveInputAddress).toHaveBeenCalled()
  })
})
