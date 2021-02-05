import { TrendingTable, SelectedTable } from './components';

const appRoutes = [
  { path: '/selected', title: 'Selected', component: SelectedTable },
  { path: '/trending', title: 'Trending', component: TrendingTable },
];

export default appRoutes;
