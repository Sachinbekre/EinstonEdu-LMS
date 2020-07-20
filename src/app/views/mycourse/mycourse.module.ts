import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycourseRoutingModule } from './mycourse-routing.module';
import { MycourseComponent } from './mycourse/mycourse.component';
import { MatCardModule, MatProgressBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ArchivedComponent } from './archived/archived.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllcourseGhostComponent } from './allcourses/allcourse-ghost/allcourse-ghost.component';
import { CollectionGHostComponent } from './collections/collection-ghost/collection-ghost.component';
import { WishlistGhostComponent } from './wishlist/wishlist-ghost/wishlist-ghost.component';
import { ArchivedGhostComponent } from './archived/archived-ghost/archived-ghost.component';

@NgModule({
  declarations: [MycourseComponent, AllcoursesComponent, CollectionsComponent, WishlistComponent, ArchivedComponent, AllcourseGhostComponent, CollectionGHostComponent, WishlistGhostComponent, ArchivedGhostComponent],
  imports: [
    CommonModule,
    MycourseRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    ModalModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule


  ],
  exports:[AllcoursesComponent]
})
export class MycourseModule { }
