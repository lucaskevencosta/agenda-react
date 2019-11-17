import styled from 'styled-components';

export const TabelasContatosStyle = styled.table`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
`

export const CabecalhoContatosStyle = styled.tr`
    padding: 15px;
    font-size: 17px;
    width: 100%;
    border-bottom: 1px solid #000;
    .id {
        padding: 1em 1.2em;
    }
    .nome {
        padding: 1em 8em;
    }
    .telefone {
        padding: 1em 6.2em;
    }
    .email {
        padding: 1em 6.8em;
    }
    .acoes {
        padding: 1em 2em;
    }
`