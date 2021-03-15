import React, { useContext } from "react";
import { CODE, TableContext } from "./Mine";

const Td = ({ rowIndex, cellIndex }) => {

    const getTdstyle = (code) => {
        switch (code) {
            case CODE.NORMAL:
            case CODE.MINE:
                return {
                    background: "#444",
                }
            case CODE.OPEND:
                return {
                    background: "white",
                }
            default:
                return {
                    background: "white",
                }
        }
    }

    const getTdText = (code) => {
        switch (code) {
            case CODE.NORMAL:
                return '';
            case CODE.MINE:
                return 'X';
            default:
                return '';
        }
    }

    const { tableData } = useContext(TableContext);

    return (
        <td
            style={getTdstyle(tableData[rowIndex][cellIndex])}
        >{getTdText(tableData[rowIndex][cellIndex])} </td>
    );
};

export default Td;