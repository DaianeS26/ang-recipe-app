import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
})
export class HeaderComponent {
    // // collapsed = true;
    // //Output decorator allows us to listen to this event from outside this component
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    constructor(private dataStorageService: DataStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

}