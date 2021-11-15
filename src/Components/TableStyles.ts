import styled from "styled-components"

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.9em;
  width: 100%;
  thead tr {
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }
  th,
  td {
    padding: 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
`
export const Tag = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  text-align: center;
  width: 80px;
`
export const TableContainer = styled.div`
  margin: 25px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: unset;
    padding: unset;
    align-items: unset;
    justify-content: unset;
  }
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`
