import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export const First = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000, category: "1"},
        {make: "Ford", model: "Mondeo", price: 32000, category: "0"},
        {make: "Porsche", model: "Boxter", price: 72000, category: "3"}
    ]);

    return (
        <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
                        <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="make" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="model" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="price" sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field="category" sortable={true} filter={true} ></AgGridColumn>

                
                
            </AgGridReact>
        </div>
    );
};
