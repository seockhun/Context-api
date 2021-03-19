import React, { useState, useCallback, useContext } from "react";
import * as S from "./FormStyle";
import { START_GAME } from "./Mine";
import { TableContext } from "./Mine";

const Form = () => {

    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);

    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    }, []);

    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const start = useCallback(() => {
        dispatch({ type: START_GAME, row, cell, mine });
    }, [row, cell, mine]);

    return (
        <S.InputBox>
            <S.RowInput type="number" placeholder="row count" onChange={onChangeRow} />
            <S.CellInput type="number" placeholder="cell count" onChange={onChangeCell} />
            <S.MineInput type="number" placeholder="mine count" onChange={onChangeMine} />
            <S.StartBtn onClick={start}>start</S.StartBtn>
        </S.InputBox >
    );
}

export default Form;