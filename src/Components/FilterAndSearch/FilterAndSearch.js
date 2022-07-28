import React from 'react';
import InputStyle from "../../UI/Input/InputStyle";
import SelectStyle from "../../UI/Select/SelectStyle";

function FilterAndSearch({filter,setFilter}) {
    return (
        <>
            <div className="d-flex my-5">
                <InputStyle className="form-control" placeholder="Search" value={filter.query} onChange={e=>setFilter({...filter,query:e.target.value})}/>
                <SelectStyle className="form-select"
                             value={filter.sort}
                             onChange={selected=>setFilter({...filter,sort:selected})}
                             options={[
                                 {value:"firstName",name:"FirstName"},
                                 {value:"job",name:"Job"},
                             ]}
                             defaultValue="Sort"
                />
            </div>
        </>
    );
}

export default FilterAndSearch;