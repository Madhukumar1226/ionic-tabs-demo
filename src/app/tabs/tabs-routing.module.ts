import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from '../tab3/tab3.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        children: [
          {
            path: "",
            loadChildren: () =>
            import('../tab3/tab3.module').then(m => m.Tab3PageModule),
          },
          {
            path: 'page1',
            loadChildren: () => import('../tab3/page1/page1.module').then( m => m.Page1PageModule)
          },
          {
            path: 'page2',
            loadChildren: () => import('../tab3/page2/page2.module').then( m => m.Page2PageModule)
          },
          {
            path: 'page3',
            loadChildren: () => import('../tab3/page3/page3.module').then( m => m.Page3PageModule)
          },
          {
            path: 'page4',
            loadChildren: () => import('../tab3/page4/page4.module').then( m => m.Page4PageModule)
          },
          {
            path: 'page5',
            loadChildren: () => import('../tab3/page5/page5.module').then( m => m.Page5PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
