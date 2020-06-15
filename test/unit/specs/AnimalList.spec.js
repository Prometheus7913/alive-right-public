import Vue from 'vue';
import AnimalList from '@/components/AnimalList';

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData,
  }).$mount();
  return vm;
}
const listName = 'Идет сбор на лечение';
const axiosUrl = 'https://aliveright.ru/cards/needTreatment';
const listProps = {
  listName,
  axiosUrl,
};

describe('AnimalList.vue', () => {
  it('AnimalList title should match', () => {
    const headingData = mountComponentWithProps(AnimalList, listProps);
    expect(headingData.$el.querySelector('.cards-h1').textContent)
      .toEqual('Идет сбор на лечение');
  });
  it('AnimalList newAnimal-href should match', () => {
    const headingData = mountComponentWithProps(AnimalList, listProps);
    expect(headingData.$el.querySelector('.new-card-link').href)
      .toEqual('http://localhost/newAnimal');
  });
  it('AnimalList card number should match with axios.get array length', () => {
    const headingData = mountComponentWithProps(AnimalList, listProps);
    expect(headingData.$el.getElementsByClassName('animal-card').length)
      .toEqual(headingData.newCards.length);
  });
});
