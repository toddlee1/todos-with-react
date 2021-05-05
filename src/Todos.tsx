import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Todos() {
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setTodos(todos.concat(e.target.todo.value));
        e.target.todo.value = "";
    }

    const handleDelete = (index: number, e: any) => {
        e.preventDefault();
        let temp = todos.slice();
        temp.splice(index, 1);
        setTodos(temp);
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <RootDiv>
            <Empty />
            <ListView>
                <TodosDiv>
                    {
                        todos.map((it, index) => (
                            <Todo key={index}>
                                <Content>{it}</Content>
                                <DeleteBtn>
                                    <button onClick={(e) => handleDelete(index, e)}>
                                        del
                                    </button>
                                </DeleteBtn>
                            </Todo>
                        ))
                    }
                </TodosDiv>
                <InputDiv>
                    <form id="addTodoForm" onSubmit={handleSubmit}>
                        <TodoInput type="text" name="todo" placeholder="what to do"></TodoInput>
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
const ListView = styled.div``
const TodosDiv = styled.div`
    margin: 10px;
    background-color: white;
    border-top: solid 1px;
    border-right: solid 0.5px;
    border-left: solid 0.5px;
`
const Todo = styled.div`
    border-bottom: solid 0.5px;
    display: flow;
    height: 50px;
    padding: 5px;
`
const Content = styled.div`
    text-align: center;
    font-size: 40px;
    width: 90%;
`
const DeleteBtn = styled.div`
    text-align: center;
    border-left: dotted 0.5px;
    width: 10%;
`
const InputDiv = styled.div`
    margin: 10px;
    text-align: center;
`
const TodoInput = styled.input`
    height: 50px;
    font-size: 30px;
    text-align: center;
`