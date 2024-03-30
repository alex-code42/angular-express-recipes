export interface Recipe {
    _id?: string; 
    title: string;
    content: string;
    img_url: string;      
    ingredients?: Ingredient[];

    // Add any other properties if needed
}

export interface Ingredient {
    name: string;
    amount: string;
    // Add any other properties if needed
}
