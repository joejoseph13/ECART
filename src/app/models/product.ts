export interface adminProductdata {
    id: number;
    name: string;
    categoryId: number;
    categoryName?: string;
    description: string;
    stock: number;
    image: string;
    status: string;
    createdBy: string;
    createdDate: string;
    lastModifiedBy: string;
    lastModifiedDate: string;
    price:number;
    
}