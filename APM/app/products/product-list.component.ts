import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductServie } from './product.service';
@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'product List';
    imageWidth: number = 50;
    imageMargin: number= 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductServie) {

    }

    toggleImage(): void {
        this.showImage = ! this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'product List:' + message;
    }
}
// https://www.sitepoint.com/how-to-build-an-api-only-jwt-powered-laravel-app/