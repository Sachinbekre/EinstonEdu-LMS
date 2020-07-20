import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycourseComponent } from './mycourse/mycourse.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ArchivedComponent } from './archived/archived.component';

const routes: Routes = [
  {
    path:'',component:MycourseComponent,
    children:[
      {
        path:'allcourses',component:AllcoursesComponent
      },
      {
        path:'collections',component:CollectionsComponent
      },
      {
        path:'wishlist',component:WishlistComponent
      },
      {
        path:'archived',component:ArchivedComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycourseRoutingModule { }
