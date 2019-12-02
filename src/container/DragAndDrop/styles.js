import styled from 'styled-components';

export const DragUI = styled.div`
  width: 300px;
  height: 300px;
  border: 1px dashed grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  text-align: center;
`;

export const FullWidth = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  .dragUI {
    margin: 10px;
  }
  .previewUI {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const PreviewUI = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #d8d0d0;
  margin: 10px;
  padding: 10px;
  .title {
    height: 20px;
    text-align: center;
  }
  >img {
    width: 100%;
    height: calc(100% - 20px);
  }
`;