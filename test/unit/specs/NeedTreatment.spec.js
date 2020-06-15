import Vue from 'vue';
import NeedTreatment from '@/NeedTreatment.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('NeedTreatment.vue', () => {
  it('NeedTreatment - title should match', () => {
    const headingData = mountComponentWithProps(NeedTreatment);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Идет сбор на лечение');
  });
  it('NeedTreatment - has one AnimalList', () => {
    const headingData = mountComponentWithProps(NeedTreatment);
    expect(headingData.$el.querySelectorAll('.cards-title').length)
      .toEqual(1);
  });
  it('NeedTreatment - axiosUrl is correct', () => {
    const headingData = mountComponentWithProps(NeedTreatment);
    expect(headingData.axiosUrl)
      .toEqual('https://aliveright.ru/cards/needTreatment');
  });
});
