import { Image } from '@ks89/angular-modal-gallery';

export class Project{
    title:string;
    languages:string[];
    description:string;
    github:string;
    pictures:Image[];
    freamworks:string[];
    database:string;
    libraries:string[];
    url:string;
    constructor(title:string, lenguages:string[],description:string, github:string,pictures:Image[],
        freamworks:string[],database:string,libraries:string[], url:string){
            this.title=title;
            this.languages=lenguages;
            this.description=description;
            this.github=github;
            this.pictures=pictures;
            this.freamworks=freamworks;
            this.database=database;
            this.libraries=libraries;
            this.url=url;
        }
}