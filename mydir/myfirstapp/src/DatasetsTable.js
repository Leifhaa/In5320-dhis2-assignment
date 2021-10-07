import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
import classes from "./App.module.css";

export function DatasetsTable(props) {
    return (
        <div className={classes.datasetstable}>
            <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>Display Name</TableCellHead>
                        <TableCellHead>ID</TableCellHead>
                        <TableCellHead>Created</TableCellHead>
                    </TableRowHead>
                </TableHead>
                <TableBody>
                    <TableRow key={props.selected.id}>
                        <TableCell>{props.selected.displayName}</TableCell>
                        <TableCell>{props.selected.id}</TableCell>
                        <TableCell>{props.selected.created}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>)
}