import React, { useState } from 'react';
import styled from 'styled-components';

function Todos() {
    const [todos, setTodos] = useState<string[]>(["get ready to survive", "clean server room"]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setTodos(todos.concat(e.target.todo.value));
    }
    return (
        <RootDiv>
            <Empty/>
            <TodosDiv>
                {todos.map(it => (<Todo>{it}</Todo>))}
                <form id="addTodoForm" onSubmit={handleSubmit}>
                    <input type="text" name="todo" placeholder="what to do?"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </TodosDiv>
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
const TodoInput = styled.input`
    height: 50px;
    width: 100%;
    font-size: 30px;
`