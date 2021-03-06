import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Dish } from '../shared/dish';
import { DrawerPage } from '../shared/drawer/drawer.page';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends DrawerPage implements OnInit {
  dishes: Dish[];

  errMess: string;

  constructor(private dishService: DishService,
    private changeDetectorRef:ChangeDetectorRef,
    @Inject('BaseURL') private BaseURL) {
      super(changeDetectorRef);
    }
  
  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

}