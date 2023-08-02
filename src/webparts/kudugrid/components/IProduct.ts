

export interface IProduct{
   
        id: number;
        ProductName: string;
        SupplierID: number;
        CategoryID: number;
        QuantityPerUnit: string;
        UnitPrice: number;
        UnitsInStock: number;
        UnitsOnOrder: number;
        ReorderLevel: number;
        Discontinued: boolean;
        Category: {
            CategoryID:number;
            CategoryName:string;
            Description:string;
        };
}