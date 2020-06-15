import Vue from 'vue';
import AnimalForm from '@/components/AnimalForm';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('AnimalForm.vue', () => {
  it('AnimalForm - anPriority should match', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.anPriority)
      .toEqual('Стандартный');
  });
  it('AnimalForm - action should match', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.action)
      .toEqual('http://localhost/addAnimal');
  });
  it('AnimalForm - method should match', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.method)
      .toEqual('post');
  });
  it('AnimalForm - input number should match', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.querySelectorAll('.anForm li').length)
      .toEqual(25);
  });
  it('AnimalForm - default photo-box-1 number should be 1', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.querySelectorAll('.photo-box-1').length)
      .toEqual(1);
  });
  it('AnimalForm - default photo-box number should be 0', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.querySelectorAll('.photo-box').length)
      .toEqual(0);
  });
  it('AnimalForm - default pictureInput-button-plus should be enabled', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.querySelector('.pictureInput-button-plus').disabled)
      .toEqual(false);
  });
  it('AnimalForm - default pictureInput-button-minus should be disabled', () => {
    const headingData = mountComponentWithProps(AnimalForm);
    expect(headingData.$el.querySelector('.pictureInput-button-minus').disabled)
      .toEqual(true);
  });
});
