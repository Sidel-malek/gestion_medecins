import { Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [
  { path: 'insert', component: NewComponentComponent },
  { path: 'filter', component: FilterComponent },
];
