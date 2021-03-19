import React, { useCallback, useContext } from "react";
import { CODE, OPEN_CELL, TableContext, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from "./Mine";


const getTdstyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: "#444",
            }
        case CODE.CLICKED_MINE:
        case CODE.OPEND:
            return {
                background: "white",
            }
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return {
                background: "yellow",
            }
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: "red",
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
        case CODE.CLICKED_MINE:
            return 'bomb';
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return '!';
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return '?';
        default:
            return code || '';
    }
}

const Td = ({ rowIndex, cellIndex }) => {

    const { tableData, dispatch, halted } = useContext(TableContext);



    const onClickTd = useCallback(() => {
        if (halted) {
            return;
        }

        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPEND:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return;
            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.MINE:
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);



    const onRightClickTd = useCallback((e) => {
        e.preventDefault();
        if (halted) {
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {

            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.FLAG:
            case CODE.FLAG_MINE:
                dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);

    return (
        <td
            style={getTdstyle(tableData[rowIndex][cellIndex])}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}
        >{getTdText(tableData[rowIndex][cellIndex])} </td>
    );
};

export default Td;