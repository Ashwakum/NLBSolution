import * as React from 'react'
import { useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IProduct } from './IProduct';

const columns: GridColDef[] = [

    { field: 'id', headerName: 'ProductID', width: 90 },
    { field: 'ProductName', headerName: 'Product name', width: 190 },
    { field: 'QuantityPerUnit', headerName: 'Quantity Per Unit', width: 160 },
    {
        field: 'SupplierID',
        headerName: 'SupplierID',
        type: 'number',
        width: 100,
    },
    {
        field: 'UnitPrice',
        headerName: 'Unit Price',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.UnitPrice || ''}`,
    }
];

type ItemProduct = {
    products: IProduct[];
}

const DatalistWithPage = (props: ItemProduct) => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState(props.products);
    const keys=['ProductName', 'QuantityPerUnit']
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setProduct(props.products.filter((item:any) =>
        keys.some((key)=>item[key].toLowerCase().includes(search))));
    };
    // console.log(props.products.filter((item) =>
    //     item.ProductName.toLowerCase().includes(search)));

    return (

        <div style={{ height: 400, width: '100%' }}>
            <label htmlFor="search">
                Search by Task : &nbsp;&nbsp;
                <input id="search" style={{width: 300 }} type="text"
                placeholder='Search Product name or Quantity Unit' onChange={handleSearch} />
            </label>
            <DataGrid
                rows={product}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                pagination />
        </div>
    )
}
export default DatalistWithPage