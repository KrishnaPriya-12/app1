import { Component } from '@angular/core';

interface Planters
{
   planterId:number,
   planterName:string,
   height:number,
   category:string,
   imageName:string,
   about:string,
   price:number
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  allPlanters : Array<Planters> = [];

  constructor()
  {
    let p1 : Planters = {
      "planterId":101,
      "planterName":"RosePlant",
      "height":15,
      "category":"Plant",
      "imageName":"rose.jpeg",
      "about":"good plant and gives lot of flowers",
      "price":100
    }
    let p2 : Planters = {
      "planterId":102,
      "planterName":"MariGold",
      "height":10,
      "category":"Plant",
      "imageName":"marigold.jpeg",
      "about":"good smell and flowers are mainly used for prayers",
      "price":50
    }
    let p3 : Planters = {
      "planterId":103,
      "planterName":"Sunflower Seed",
      "height":3,
      "category":"Seed",
      "imageName":"sunflowerseed.jpeg",
      "about":"good seeds and plants grows in 1 month",
      "price":100
    }
    let p4 : Planters = {
      "planterId":104,
      "planterName":"Brinjal Seed",
      "height":4,
      "category":"Seed",
      "imageName":"brinjalseed.jpeg",
      "about":"gives crop in 60 days",
      "price":20
    }

    this.allPlanters = [p1,p2,p3,p4];

  }

}
