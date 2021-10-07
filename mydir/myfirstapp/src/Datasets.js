import React, {useState} from "react";
import {useDataQuery} from "@dhis2/app-runtime";
import {CircularLoader} from '@dhis2/ui'
import {Menu, MenuItem} from '@dhis2/ui'
import {DatasetsTable} from "./DatasetsTable";
import classes from "./App.module.css";


const dataQuery = {
    dataSets: {
        "resource": "dataSets",
        "params": {
            "paging": false,
            "fields": ["id, displayName,created"]
        },
    }
}


export function Datasets() {
    const [selected, setSelected] = useState(null)
    const {loading, error, data} = useDataQuery(dataQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <CircularLoader invert large/>
    }

    if (data) {
        console.log(data)
        return (
            <div className={classes.datasetswrapper}>
                <div className={classes.datasetsmenu}>
                    <Menu>
                        {data.dataSets.dataSets.map(row => {
                            return <MenuItem key={row.id} label={row.displayName} onClick={() => setSelected(row)}/>
                        })
                        }
                    </Menu>
                </div>
                {selected !== null &&
                    <DatasetsTable selected={selected}/>
                }
            </div>
        )
    }
    return <div>Hello world</div>
}