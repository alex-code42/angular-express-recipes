export class Recipe {
    constructor(
      public name: string,
      public img_url: string,
      public ingredients: { name: string, amount: string,  }[]
    ) {}
  }