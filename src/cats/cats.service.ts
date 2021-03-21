//TYPESCRIPT
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class CatsService {
  cats: any[];

//Injeção de dependência
//   constructor(private catsService: CatsService) {}

//Provedores opcionais
// @Injectable()
// export class HttpService<T> {
//   constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
// }

//Injeção baseada em propriedade
// @Injectable()
// export class HttpService<T> {
//   @Inject('HTTP_OPTIONS')
//   private readonly httpClient: T;
// }

  constructor() {
    this.cats = [];
  }

  create(cat: any) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}

//JAVASCRIPT
// import { Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';

// @Injectable()
// export class CatsService {
//   private readonly cats: Cat[] = [];

//   create(cat: Cat) {
//     this.cats.push(cat);
//   }

//   findAll(): Cat[] {
//     return this.cats;
//   }
// }