import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'projects-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projekti:Project[];
  constructor(private service:ProjectsService){}
  ngOnInit(): void {
    this.projekti=this.service.getAllProjects();
  }
}
