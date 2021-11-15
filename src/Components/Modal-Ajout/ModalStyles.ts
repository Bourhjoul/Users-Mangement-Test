import styled from "styled-components"
import { CloseOutlined } from "@ant-design/icons"
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  z-index: 2;
`

export const ModalWrapper = styled.div`
  width: 90vw;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 90% 10%;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;

  line-height: 1.8;
  color: #141414;
`

export const CloseModalButton = styled(CloseOutlined)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Input = styled.input`
  border: 1px solid #a0a0a0;
  outline: none;
  padding: 8px;
  border-radius: 7px;
  width: 320px;
`
export const Select = styled.select`
  border: 1px solid #a0a0a0;
  outline: none;
  padding: 5px;
  border-radius: 7px;
  width: 320px;
`

export const Button = styled.button`
  background-color: #ffaa0a;
  font-weight: 600;
  padding: 17px 55px;
  border-radius: 13px;
  border: none;
  margin-top: 10px;
  margin-right: 20px;
  float: right;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
