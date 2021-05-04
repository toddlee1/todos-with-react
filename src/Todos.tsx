import React, { useState } from 'react';
import styled from 'styled-components';

function Todos() {
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setTodos(todos.concat(e.target.todo.value));
        e.target.todo.value = "";
    }
    return (
        <RootDiv>
            <Empty />
            <ListView>
                <TodosDiv>
                    {todos.map(it => (<Todo>{it}</Todo>))}
                </TodosDiv>
                <InputDiv>
                    <form id="addTodoForm" onSubmit={handleSubmit}>
                        <TodoInput type="text" name="todo" placeholder="what to do?"></TodoInput>
                        <input type="hidden" value="submit"></input>
                    </form>
                </InputDiv>
            </ListView>
            <Empty />
        </RootDiv>
    )
}

export default Todos;

const RootDiv = styled.div`
    width: 100%;
    background-color: #F0F8FF;
    display: grid;
    grid-template-columns: 20% 60% 20%;
`
const Empty = styled.div``
const ListView = styled.div`

`
const TodosDiv = styled.div`
    margin: 10px;
    background-color: white;
    border-top: solid 1px;
    border-right: solid 0.5px;
    border-left: solid 0.5px;
`
const Todo = styled.div`
    border-bottom: solid 0.5px;
    height: 50px;
    font-size: 40px;
    padding: 5px;
    text-align: center;
`
const InputDiv = styled.div`
    margin: 10px;
    text-align: center;
`
const TodoInput = styled.input`
    height: 50px;
    font-size: 30px;
`