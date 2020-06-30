import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import getters from '@/store/getters'
import DayTemp from "@/components/DayTemp";

const localVue = createLocalVue()

localVue.use(Vuex)

describe('DayTemp.vue', () => {

  let state
  let store

  beforeEach(() => {
    state = {
      forecast: {
        today: {
          main: {
            temp: 20,
          },
        },
      }
    }
    store = new Vuex.Store({
      state,
      getters: {
        getCelcius: getters.getCelcius,
        getFahrenheit: getters.getFahrenheit,
        getForecastStatus: getters.getForecastStatus
      }
    })
  })

  it('Render title when passed', () => {
    const dayTitle = 'Title Test'
    const dayOption = 'today'
    const wrapper = shallowMount(DayTemp, {
      propsData: {dayTitle, dayOption},
      store,
      localVue
    })
    const strong = wrapper.find('strong')
    expect(strong.text()).toMatch(dayTitle.toUpperCase())
  })
  it('Change temp when click', () => {
    const dayTitle = 'Title Test'
    const dayOption = 'today'
    const wrapper = shallowMount(DayTemp, {
      propsData: {dayTitle, dayOption},
      store,
      localVue
    })
    const div = wrapper.find('div')
    div.trigger('click')
    expect(wrapper.vm.tempCelsius).toBe(false)
  })
})
