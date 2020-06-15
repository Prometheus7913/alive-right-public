import Vue from 'vue';
import NewAnimal from '@/NewAnimal.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('NewAnimal.vue', () => {
  it('NewAnimal - title should match', () => {
    const headingData = mountComponentWithProps(NewAnimal);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Добавить анкету');
  });
  it('NewAnimal - has one AnimalForm', () => {
    const headingData = mountComponentWithProps(NewAnimal);
    expect(headingData.$el.querySelectorAll('.anForm').length)
      .toEqual(1);
  });
});
