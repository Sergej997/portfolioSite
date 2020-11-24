import { Injectable } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import { Project } from './project.model';

@Injectable()
export class ProjectsService{
    projekti=[
      new Project("BeogradskiRestorani.com",['NodeJS','HTML','CSS','JavaScript'],"This is web application that gives users preview of best restaurants settled in Belgrade. Application offers authentication, as well as possibilities to add new restaurants, edit and delete existing ones and also write comments and post 1-5 star reviews on every restaurant. There is also search option, which finds all restaurants on a given name or restaurants address. Application was made using MEN stack (Mongo, Express, Node)","https://github.com/Sergej997/BeogradskiRestorani.com",
      [new Image(0,
       { // modal
         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/1%20.png?raw=true',
         description: 'Landing page'
       }), new Image(1,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/2.png?raw=true',
           description: 'Landing page'
         }),
         new Image(2,
          { // modal
            img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/3.png?raw=true',
            description: 'Home page'
          }),
           new Image(3,
             { // modal
               img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/4.png?raw=true',
               description: 'Home page'
             }),
             new Image(4,
               { // modal
                 img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/5.png?raw=true',
                 description: 'Restaurant page'
               }),
               new Image(5,
                 { // modal
                   img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/6.png?raw=true',
                   description: 'Reviews'
                 }),
                 new Image(6,
                   { // modal
                     img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/7.png?raw=true',
                     description: 'Login form'
                   }),
                   new Image(7,
                     { // modal
                       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/8.png?raw=true',
                       description: 'New restaurant'
                     }),
                     new Image(8,
                      { // modal
                        img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/9.png?raw=true',
                        description: 'Search'
                      }),
                      new Image(9,
                        { // modal
                          img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/10.png?raw=true',
                          description: 'Restaurant page'
                        })
     ],['Express',],"MongoDB",["Bootstrap"],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/beogradskiResstorani/slika.PNG?raw=true"),

      new Project("Review of football tournaments in Serbia",['Java'],"It is JAVA GUI client-server application. It has been done in NetBeans IDE for java. Application provides work with database.E.g. Users can add football teams, competitions, matches,results, players and statistics of players on different matches and save them to database with MySQL used as relational database management system.","https://github.com/Sergej997/PregledFudbalskihTakmicenjaUSrbiji",[new Image(0,
       { // modal
         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/1.png?raw=true',
         description: 'Login form'
       }), new Image(1,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/4.png?raw=true',
           description: 'Adding new club'
         }),
         new Image(2,
           { // modal
             img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/2.png?raw=true',
             description: 'Login and Registration'
           }),
           new Image(3,
             { // modal
               img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/3.png?raw=true',
               description: 'Home page'
             }),
             new Image(6,
               { // modal
                 img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/5.png?raw=true',
                 description: 'Adding new tournament '
               }),
               new Image(7,
                 { // modal
                   img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/6.png?raw=true',
                   description: 'Adding new match'
                 }),
                 new Image(8,
                   { // modal
                     img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/7.png?raw=true',
                     description: 'Adding new metch result'
                   }),
                   new Image(9,
                     { // modal
                       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/8.png?raw=true',
                       description: 'Adding new player'
                     }),
                     new Image(10,
                      { // modal
                        img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/9.png?raw=true',
                        description: 'Add new player statistics'
                      })
     ],[],"MySQL",[],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ps/4.png?raw=true"),
     new Project("Fit&Sit",['HTML','SCSS',"JavaScript","TypeScript"],"PWA(progressive web application) made using Angular and Ionic framework. It gives users preview of all the existing recepies as well as possibility to add new recepies, edit and delete their own recepies, add ingredients to their own shopping list and also to get their own calories goals and to track them. Application also allows access to Camera, which is accomplished using Capacitor plugin. Application offers connection to database,which is accomplished using firebase. This project is realised as collaboration of two people."
     ,"https://github.com/NikolaRadivojevic97/eatApp",[new Image(0,
       { // modal
         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/1.png?raw=true',
         description: 'Signup/Login page'
       }), new Image(1,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/2.png?raw=true',
           description: 'All recepies'
         }),
         new Image(2,
           { // modal
             img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/3.png?raw=true',
             description: 'Sweets'
           }),
           new Image(3,
             { // modal
               img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/4.png?raw=true ',
               description: 'My recepies'
             }),
             new Image(6,
               { // modal
                 img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/5.png?raw=true',
                 description: 'New recepie'
               }),
               new Image(7,
                 { // modal
                   img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/6.png?raw=true',
                   description: 'Hamburger'
                 }),
                 new Image(8,
                   { // modal
                     img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/7.png?raw=true',
                     description: 'Hamburger ingredients'
                   }),
                   new Image(9,
                     { // modal
                       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/8.png?raw=true',
                       description: 'Adding ingredient to shopping list'
                     }),
                     new Image(10,
                       { // modal
                         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/9.png?raw=true',
                         description: 'Preparation process'
                       }),
                       new Image(11,
                         { // modal
                           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/10.png?raw=true',
                           description: 'Shopping list'
                         }),
                         new Image(12,
                           { // modal
                             img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/11.png?raw=true',
                             description: 'Calories overview'
                           })
     ],["Angular, Ionic"],"Firebase",["Bootstrap"],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/ionicApp/url.png?raw=true"),

       new Project("Mobile shop(Android version)",['Java','PHP'],"This application represents mobile version of mobile shop application also listed in this portfolio. Application offers authentication, as well as possibilities to add new phones and new packages  for admins, and also options to view those phones and packages for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application was realised using android studio and java programming language, and was made as collaboration of three people.","https://github.com/LukaS70/Elektronska-Prodavnica",[new Image(0,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/1.png?raw=true',
           description: 'Home page'
         }), new Image(1,
           { // modal
             img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/2.png?raw=true',
             description: 'Shop'
           }),
           new Image(2,
             { // modal
               img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/3.png?raw=true',
               description: 'Side menu'
             }),
             new Image(3,
               { // modal
                 img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/4.png?raw=true',
                 description: 'Login'
               }),
               new Image(6,
                 { // modal
                   img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/5.png?raw=true',
                   description: 'Mobile phone specification'
                 }),
                 new Image(7,
                   { // modal
                     img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/6.png?raw=true',
                     description: 'Mobile phone search'
                   }),
                   new Image(8,
                     { // modal
                       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/7.png?raw=true',
                       description: 'Contracts overview'
                     }),
                     new Image(9,
                       { // modal
                         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/8.png?raw=true',
                         description: 'Adding new phone'
                       })
       ],[],"MySQL",[],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/mobileShop/14.png?raw=true"),new Project("Mobile shop",['HTML','CSS', 'JavaScript','PHP'],"This web application represents e-commerce which offers mobile phones to users. Application offers authentication, as well as possibilities to add new phones and new packages for admins, and also options to view those phones and packages for non-admin users. Registered users can also buy phones. There is search option which offers users option to find phones by name, price, ram memory and camera resolution. Application's style was created using java script,  bootstrap and html, while backend was made using php and flight framework. This project is realised as collaboration of three people.","https://github.com/NikolaRadivojevic97/elektronska_prodavnica",[new Image(0,
       { // modal
         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/1.png?raw=true',
         description: 'Home page'
       }), new Image(1,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/2.png?raw=true',
           description: 'Home page'
         }),
         new Image(2,
           { // modal
             img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/3.png?raw=true',
             description: 'Login dropdown'
           }),
           new Image(3,
             { // modal
               img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/4.png?raw=true',
               description: 'Mobile phone search'
             }),
             new Image(6,
               { // modal
                 img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/5.png?raw=true',
                 description: 'Mobile phone specification'
               }),
               new Image(7,
                 { // modal
                   img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/6.png?raw=true',
                   description: 'Cart'
                 }),
                 new Image(8,
                   { // modal
                     img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/7.png?raw=true',
                     description: 'Admin panel'
                   }),
                   new Image(9,
                     { // modal
                       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/8.png?raw=true',
                       description: 'Contracts overview'
                     }),
                     new Image(10,
                       { // modal
                         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/9.png?raw=true',
                         description: 'Statistics'
                       }),
                       new Image(11,
                         { // modal
                           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/10.png?raw=true',
                           description: 'Location'
                         })
     ],["Flight"],"MySQL",["Bootstrap"],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/iteh/3.png?raw=true"),
     new Project("RGB Color Game",['HTML','CSS','JavaScript'],"This is web application made using HTML5, CSS3 and vanilla JavaScript. Application gives user one randomly selected color written in RGB model and aslo six colored squares. User should figure out which square is colored in that one given RGB color. Goal of this web application is to teach users how RGB color model works","https://github.com/Sergej997/JavaScript-Color-Game",[new Image(0,
     { // modal
       img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/rgb/2.png?raw=true',
       description: 'Easy mode'
     }), new Image(1,
       { // modal
         img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/rgb/1.png?raw=true',
         description: 'Hard mode'
       }),
       new Image(2,
         { // modal
           img: 'https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/rgb/3.png?raw=true',
           description: 'You win!'
         })
   ],[],'',["Bootstrap"],"https://github.com/Sergej997/portfolioSite/blob/main/src/assets/images/rgb/Capture.PNG?raw=true")



    ]

    getProject(title:string){
        let projekat:Project=null;
        this.projekti.forEach(element => {
            if(element.title===title){
              // console.log(title);
              console.log(element)
                projekat=element;
            }
        });
        return projekat;
    }
    getAllProjects(){
      return this.projekti;
    }
}
