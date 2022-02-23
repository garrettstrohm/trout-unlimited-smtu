import styled from 'styled-components'

export const Button = styled.button`
    display: block;
    width: 200px;
    margin: auto;
    padding: 12px 0;
    font-family: inherit;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background-color: #81B062;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.25, 1);

    &:hover {
        box-shadow: 0 10px 10px rgba(0, 0, 0, .14);
        transform: translate(0, -5px);
    }
`