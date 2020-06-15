import Vue from 'vue';
import AnimalCards from '@/AnimalCards.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('AnimalCards.vue', () => {
  it('AnimalCards - title should match', () => {
    const headingData = mountComponentWithProps(AnimalCards);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Анкеты питомцев');
  });
  it('AnimalCards - the number of external links is 5', () => {
    const headingData = mountComponentWithProps(AnimalCards);
    expect(headingData.$el.querySelectorAll('.information_menu a').length)
      .toEqual(5);
  });
});
