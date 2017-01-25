import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({

    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'


    
    //,
 //   inputs: ['isFavorite']      //Another way of declaring a property as an Input property.
  
//outputs: ['change: favoriteChange'] -  //Another way of declaring a property as an Output property.
})

export class FavoriteComponent{

   @Input() isFavorite = false;

   //@Input('is-favorite') isFavorite = false; - is for aliasing to isFavorite

    @Output()  change = new EventEmitter();

    //@Output('favoriteChange')  change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }

}