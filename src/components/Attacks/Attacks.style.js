import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 24px;
    color: var(--red);
  }
`

export const Table = styled.table`
  background-color: var(--red);
  color: var(--yellow);
  width: 100%;

  td:first-child {
    text-align: left;
    padding-left: 16px;
    max-width: 120px;
  }

  th, td {
    text-align: center;
    padding: 8px 0;
  }
`

export const AllAttacks = styled.span`
  font-size: 14px;
  
  em {
    color: var(--red);
  }
`