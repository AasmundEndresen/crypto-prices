import { TrendingTable, SelectedTable } from './components';

const appRoutes = [
  { path: '/selected', title: 'Selected', component: SelectedTable },
  { path: '/trending', title: 'Trending', component: TrendingTable },
  { path: '/', title: 'Home', component: SelectedTable },
];

export default appRoutes;
