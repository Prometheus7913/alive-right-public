import Vue from 'vue';
import ArHeader from '@/components/ArHeader';

function mountComponentWithProps(Component) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
  }).$mount();
  return vm;
}

describe('ArHeader.vue', () => {
  it('ArHeader - message should match', () => {
    const headingData = mountComponentWithProps(ArHeader);
    expect(headingData.message)
      .toEqual(headingData.$el.querySelector('.for-thinking').textContent);
  });
  it('ArHeader - emblem height should match', () => {
    const headingData = mountComponentWithProps(ArHeader);
    expect(headingData.emb_height)
      .toEqual('160');
  });
});
