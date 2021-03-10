import React, { useReducer } from "react";
import * as S from "./MineStyle";
import Table from "./Table";
import Form from "./Form";

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const Mine = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Form />
            <S.Timer>{state.timer}</S.Timer>
            <Table />
            <S.Result>{state.result}</S.Result>
        </>

    );
}

export const Mine;