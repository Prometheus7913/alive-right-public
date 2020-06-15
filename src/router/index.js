import Vue from 'vue';
import Router from 'vue-router';
import AnimalCards from '@/AnimalCards';
import Map from '@/Map';
import NeedTreatment from '@/NeedTreatment';
import NewAnimal from '@/NewAnimal';
import NewHome from '@/NewHome';
import PetsWanted from '@/PetsWanted';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: AnimalCards,
    },
    {
      path: '/animal_cards',
      name: 'animalCards',
      component: AnimalCards,
    },
    {
      path: '/newHome',
      name: 'newHome',
      component: NewHome,
    },
    {
      path: '/needTreatment',
      name: '/needTreatment',
      component: NeedTreatment,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/petsWanted',
      name: 'petsWanted',
      component: PetsWanted,
    },
    {
      path: '/newAnimal',
      name: 'newAnimal',
      component: NewAnimal,
    },
  ],
  mode: 'history',
});
