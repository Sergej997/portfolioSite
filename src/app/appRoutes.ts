import { ResumeComponent } from './Resume/Resume.component';
import { ServicesComponent } from './Services/Services.component';
import { TestimonialsComponent } from './Testimonials/Testimonials.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';
import { Routes } from '@angular/router';
import { ProjectsModule } from './projects/projects.module';

export const AppRoutes:Routes =[
    {path:"about" , component:AboutComponent},
    {path:"testimonials" , component:TestimonialsComponent},
    {path:"services" , component:ServicesComponent},
    {path:"contact" , component:ContactComponent},
    {path: "resume",
    loadChildren: () =>
      import("./projects/projects.module").then((mod) => mod.ProjectsModule),
  },
    {path:"**",component:AboutComponent,pathMatch:"full"},
]
