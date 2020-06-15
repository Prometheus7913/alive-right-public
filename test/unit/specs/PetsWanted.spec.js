import Vue from 'vue';
import PetsWanted from '@/PetsWanted.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('PetsWanted.vue', () => {
  it('PetsWanted - title should match', () => {
    const headingData = mountComponentWithProps(PetsWanted);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Разыскиваются');
  });
  it('PetsWanted - has one AnimalList', () => {
    const headingData = mountComponentWithProps(PetsWanted);
    expect(headingData.$el.querySelectorAll('.cards-title').length)
      .toEqual(1);
  });
  it('PetsWanted - axiosUrl is correct', () => {
    const headingData = mountComponentWithProps(PetsWanted);
    expect(headingData.axiosUrl)
      .toEqual('https://aliveright.ru/cards/petsWanted');
  });
});
