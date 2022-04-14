import styled from 'styled-components';

export const ComponentContainer = styled.div`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 24px;
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  border: 1px solid #f0f0f0;
  padding: 16px;
  margin-top: 8px;
`
export const DetailContainer = styled.div`
  flex: 1;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 16px;

    &:last-of-type {
      margin-top: 28px;
      flex-flow: wrap;
    }
  }

  input {
    font-size: 16px;
  }
`

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  margin-right: 16px;

  >div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }
`
