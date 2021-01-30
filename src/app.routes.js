import {
  MainTable,
  TrendingTable
} from './components';

const appRoutes = [
  { path: '/selected', component: MainTable },
  { path: '/trending', component: TrendingTable },
];

export default appRoutes;