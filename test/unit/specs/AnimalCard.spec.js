import Vue from 'vue';
import AnimalCard from '@/components/AnimalCard';

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData,
  }).$mount();
  return vm;
}
const animalCardData = {
  _id: '5e7abb147c9d0c10c826a6d9',
  anName: 'Милка',
  anKind: 'Собака',
  anAge: '',
  anCharacter: '',
  anHear: '',
  anColor: '',
  anBreed: '',
  anSex: 'Женский',
  anSterilization: false,
  anVaccination: false,
  anRegion: 'Курск',
  anAdress: '',
  anStatus: '',
  anShortMessage: [
    'У Милки обнаружена травма (перелом позвоночника), в области хвоста. Чудо, что Милка ' +
    'вообще может ходить. Второе чудо, что у малышки нет проблем с туалетом, для её ситуации ' +
    '- это большая редкость.'],
  anMessage: ['У Милки обнаружена травма (перелом позвоночника), ' +
  'в области хвоста. Чудо, что Милка вообще может ходить. Второе чудо, что у малышки нет проблем ' +
  'с туалетом, для её ситуации - это большая редкость. Милка очень старая собака, видно, что она ' +
  'была домашней, кто и почему её выкинул, останется загадкой. ', 'У Милки также обнаружена опухоль ' +
  'молочной железы, и похоже, идёт воспалительный процесс. Чтобы поставить точный диагноз, нужно ' +
  'сделать УЗИ. За опухолью надо наблюдать, возможно впоследствии потребуется несколько операций.  ' +
  'И, конечно, ей нужен хороший уход и качественное питание.',
  ],
  anCategory: 'Нуждаются в лечении',
  anPriority: 'Высокий',
  priorityDescription: '',
  anContactName: 'Екатерина',
  anContactEmail: 'aliveright@yandex.ru',
  anContactTel: '',
  anContactSoc: '',
  anContactName2: '',
  anContactEmail2: '',
  anContactTel2: '',
  anContactSoc2: '',
  creationDate: '2020-03-25',
  creationTime: '01:59:48',
  changeDate: '2020-03-25',
  changeTime: '01:59:48',
  rank: 300,
  needHome: false,
  needTreatment: true,
  wanted: false,
  needOverexposure: false,
  coordinates: null,
  images: ['\\animalPhotos\\2020-2-25-1-59-48\\1.jpg'],
  registrationStatus: 'actual',
};

describe('AnimalCard.vue', () => {
  it('AnimalCard url should match', () => {
    const headingData = mountComponentWithProps(AnimalCard, { card: animalCardData });
    expect(headingData.$el.querySelector('.passport-link').href)
      .toEqual('https://aliveright.ru/animal5e7abb147c9d0c10c826a6d9');
  });
  it('AnimalCard image src should match', () => {
    const headingData = mountComponentWithProps(AnimalCard, { card: animalCardData });
    expect(headingData.$el.querySelector('.animal-photo img').src)
      .toEqual('https://aliveright.ru/animalPhotos/2020-2-25-1-59-48/1.jpg');
  });
  it('AnimalCard name should match', () => {
    const headingData = mountComponentWithProps(AnimalCard, { card: animalCardData });
    expect(headingData.$el.querySelector('.animal-main-info').textContent)
      .toEqual('Милка');
  });
  it('AnimalCard description should match', () => {
    const headingData = mountComponentWithProps(AnimalCard, { card: animalCardData });
    expect(headingData.$el.querySelector('.animal-description p').textContent)
      .toEqual('У Милки обнаружена травма (перелом позвоночника), в области хвоста. Чудо, что Милка ' +
        'вообще может ходить. Второе чудо, что у малышки нет проблем с туалетом, для её ситуации ' +
        '- это большая редкость.');
  });
});
