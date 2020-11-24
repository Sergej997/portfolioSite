import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './About/About.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './appRoutes';
import { ProfileComponent } from './Profile/Profile.component';
import { NavComponent } from './Nav/Nav.component';
import { ContactComponent } from './Contact/Contact.component';
import { ServicesComponent } from './Services/Services.component';
import { TestimonialsComponent } from './Testimonials/Testimonials.component';
import { ResumeComponent } from './Resume/Resume.component';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [										
    AppComponent,
      AboutComponent,
      ProfileComponent,
      NavComponent,
      ContactComponent,
      ServicesComponent,
      TestimonialsComponent,
      ResumeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
