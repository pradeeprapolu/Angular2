import { Component } from '@angular/core';
import {MessagesComponent} from './messages.component';
import {FavoriteComponent} from './favorite.component';



@Component({
  selector: 'my-app',
  
  

  template: 
  
  `

  <signup-form></signup-form>
    <!-- <contact-form></contact-form>-->

 <!-- <messages></messages>
  <h1>{{title}}</h1>
  <h1 textContent ="title"></h1>

  <img src ="{{imageUrl}}" />
  <img [src] ="imageUrl" />
  <img bind-src = "imageUrl" />

  <button 
    class = "btn btn-primary"
    [style.backgroundColor] ="isActive? 'blue' : 'red'" >Submit</button>

    <div (click) ="onDivClick()">
      <button (click)="onClick($event)">EventSubmit</button>
      <button on-click="onClick($event)">EventSubmit</button>
    </div>

    <input type = "text" [value] ="title" (input)="title = $event.target.value" /> 
    <input type="text" [(ngModel)] = "title" />
    <input type="text" bindon-ngModel="title" />

    <input type ="button" (click) ="title = ''" value ="Clear" />   

    Preview: {{title}} -->


     <!--   <favorite [isFavorite] = "post.isFavorite" (change)="onFavoriteChange($event)"></favorite>

        <div *ngIf ="courses.length > 0">
          List of courses
        </div>   -->   
        
        <!--     <div [hidden] ="courses.length == 0">
          List of courses
        </div>      This div will be hidden if length is 0


        <div *ngIf ="courses.length ==  0">
          You don't have any courses yet.
        </div>

             <div [hidden] ="courses.length > 0">
          You don't have any courses yet.
        </div>      This div will be hidden if length is greater than 0   -->

         <!-- <ul>
          <li [class.active] = "viewMode ='map'"><a (click) ="viewMode = 'map'">Map View</a></li>
           <li [class.active] = "viewMode ='list'"><a (click) ="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch] = "viewMode">
          <template [ngSwitchCase] ="'map'" ngSwitchDefault>Map View Content</template>   // ngSwitchDefault is for default when viewMode value doesn't match with any option
          <template [ngSwitchCase] ="'list'">List View Content</template> 
        </div>  -->

  `


  //directives:[MessagesComponent]
})
export class AppComponent {

  title ="Angular App";
  imageUrl ="http://lorempixel.com/400/200";

  isActive = false;

  onClick($event) : void{

   // $event.stopPropagation(); - to stop propagating the mouse click event to next higher level element
    console.log("Clicked", $event);
  }

  onDivClick(){
    console.log("Handled by Div");
  }

  post ={
    title: "Title",
    isFavorite: true
  }

onFavoriteChange($event){
  console.log($event);
}

  courses = [];

  viewMode = 'map';
 }

