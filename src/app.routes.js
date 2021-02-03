import { TrendingTable, SelectedTable } from './components';

const appRoutes = [
  { path: '/selected', component: SelectedTable },
  { path: '/trending', component: TrendingTable },
];

export default appRoutes;
