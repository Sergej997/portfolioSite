import { SocialMedia } from './../configuration';
import { Component, OnInit } from '@angular/core';
import { Configuration } from '../configuration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  about=true;
  projects=false;
  education=false;
  contact=false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(window.location.href.toString()==='http://localhost:4200/about' || window.location.href.toString()==='http://localhost:4200'){
      this.about=true;
      this.projects=false;
      this.education=false;
      this.contact=false;
    }
    else{if(window.location.href.toString()==='http://localhost:4200/resume'){
      this.about=false;
      this.projects=true;
      this.education=false;
      this.contact=false;
    }else{
    if(window.location.href.toString()==='http://localhost:4200/services'){
      this.about=false;
      this.projects=false;
      this.education=true;
      this.contact=false;
    }
    else{
    if(window.location.href.toString()==='http://localhost:4200/contact'){
      this.about=false;
      this.projects=false;
      this.education=false;
      this.contact=true;
    }else{
      if(window.location.href.substring(0,window.location.href.toString().lastIndexOf("/"))==='http://localhost:4200'){
        this.about=true;
        this.projects=false;
        this.education=false;
        this.contact=false;
      }else{
      this.about=false;
      this.projects=true;
      this.education=false;
      this.contact=false;
      }
      // console.log(window.location.href.substring(0,window.location.href.toString().lastIndexOf("/")))
    }
  }
}
}

  }
  onChange(ruta:string){
    console.log(ruta);
   if(ruta=='about'){
     this.about=true;
     this.projects=false;
     this.education=false;
     this.contact=false;
    }
    if(ruta=='resume'){
      this.about=false;
      this.projects=true;
      this.education=false;
      this.contact=false;
     }
     if(ruta=='services'){
      this.about=false;
      this.projects=false;
      this.education=true;
      this.contact=false;
     }
     if(ruta=='contact'){
      this.about=false;
      this.projects=false;
      this.education=false;
      this.contact=true;
     }
  }

}
