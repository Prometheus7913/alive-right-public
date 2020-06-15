import Vue from 'vue';
import NewHome from '@/NewHome.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('NewHome.vue', () => {
  it('NewHome - title should match', () => {
    const headingData = mountComponentWithProps(NewHome);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Ищут дом');
  });
  it('NewHome - has one AnimalList', () => {
    const headingData = mountComponentWithProps(NewHome);
    expect(headingData.$el.querySelectorAll('.cards-title').length)
      .toEqual(1);
  });
  it('NewHome - axiosUrl is correct', () => {
    const headingData = mountComponentWithProps(NewHome);
    expect(headingData.axiosUrl)
      .toEqual('https://aliveright.ru/cards/newHome');
  });
});
