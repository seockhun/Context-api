import React, { useState } from "react";
import * as S from "./FormStyle";

const Form = () => {

    const [rwo, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);

    return (
        <S.InputBox>
            <S.RowInput></S.RowInput>
            <S.CellInput></S.CellInput>
            <S.MineInput placeholder={}></S.MineInput>
        </S.InputBox>
    );
}

export const Form;