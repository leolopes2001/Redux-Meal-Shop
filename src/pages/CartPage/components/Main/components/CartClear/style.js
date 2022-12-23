import styled from "styled-components";

export const CartClearStyled = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    button{
        background-color: #000000;
        border: none;
        padding: 0.5rem;
        color: #ffff;
        width: 180px;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
        transition: all 200ms;

        &:hover{
            color: #000;
            background-color: #FF9900;
        }
    }
`