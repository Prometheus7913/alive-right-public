import Vue from 'vue';
import Map from '@/Map.vue';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('Map.vue', () => {
  it('Map - title should match', () => {
    const headingData = mountComponentWithProps(Map);
    expect(headingData.$el.querySelector('h1').textContent)
      .toEqual('Карта');
  });
  it('Map - has one AnimalMap', () => {
    const headingData = mountComponentWithProps(Map);
    expect(headingData.$el.querySelectorAll('.inside-map').length)
      .toEqual(1);
  });
});
