import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {IvyGalleryModule} from 'angular-gallery';
import { RouterModule } from '@angular/router';
import { Project1Component } from './project1/project1.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project.component';
//
import { FormsModule } from '@angular/forms';




// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`



@NgModule({
  declarations: [ProjectComponent, ProjectsComponent, Project1Component],
  imports: [
    CommonModule,    FormsModule,
    GalleryModule.forRoot(), // <-------------------------------------------- angular-modal-gallery module import
    IvyGalleryModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectComponent,
        children: [
          { path: '', component: ProjectsComponent },
          {
            path: ':project',
            component: Project1Component,
          }
        ]
      }
    ])
  ],
  providers: [],
})
export class ProjectsModule { }
