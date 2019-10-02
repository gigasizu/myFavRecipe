import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Mee Goreng',
      imageUrl: 'https://iresipi.com/media/DSC_5402.jpg',
      ingredients: ['nasi', 'udang', 'sayur', 'cili', 'limau']
    },
    {
      id: 'r2',
      title: 'Nasi Lemak',
      imageUrl:
        'https://d1alt1wkdk73qo.cloudfront.net/images/guide/6abb55670f06cebacdc5023d11367153/640x478_ac.jpg',
      ingredients: ['nasi', 'kacang', 'timun', 'sotong', 'kangkung']
    },
    {
      id: 'r3',
      title: 'Rojak',
      imageUrl:
        'https://www.ecomall.my/image/cache/data/product-24555/4-800x800.jpg',
      ingredients: ['tauhu', 'kentang', 'udang']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
