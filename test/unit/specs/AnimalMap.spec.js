import Vue from 'vue';
import AnimalMap from '@/components/AnimalMap';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('AnimalMap.vue', () => {
  it('AnimalMap - inside-map id should match', () => {
    const headingData = mountComponentWithProps(AnimalMap);
    expect(headingData.$el.id)
      .toEqual('map');
  });
});
