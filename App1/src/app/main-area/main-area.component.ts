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
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent {
  allPlanters : Array<Planters> = [];
  watchList : Array<Planters> = [];
  watchlistCount:number=0 ;
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
  goForBuy(planters:string)
  {
    let planterId = parseInt(planters);
    console.log(" code to buy "+planterId+" planters");
    
  }

  addWatchlist(planters:string)
  {
    let addPlanterId = parseInt(planters);
    
    this.allPlanters.forEach(p=>{
      if(p.planterId == addPlanterId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

}
