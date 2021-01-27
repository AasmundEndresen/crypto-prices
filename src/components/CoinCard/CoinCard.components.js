import styled from 'styled-components'

export const StyledContainer = styled.div`
position: relative;
box-sizing: border-box;
display: flex;
flex-direction: row;
width: 280px;
height: 150px;
background-color: whitesmoke;
border-radius: 8px;
margin: 12px;
padding: 12px;
margin-bottom: 16px;
overflow: hidden;
box-shadow:
  2px 2px 9px 2px rgba(0,0,0,0.25),
  1px 1px 2px 1px inset rgba(0,0,0,0.25),
  -2px -2px 9px 2px rgba(255,255,255,0.75),
  -1px -1px 2px 1px inset rgba(255,255,255,0.75);
h1 {
  font-size: 20px;
  padding: 0;
  margin: 0;
  color: blueviolet;
}
img {
  position: absolute;
  height: 100%;
  top: 30px;
  right: -25px;
  opacity: 0.1;
}
.current, .btcmcap, .price {
  &::before {
    content: '$';
  }
}
.amount {
  font-size: 14px;
  color: gray;
}
.increment {
  padding: 0;
  margin: 0;
}
.current, .increment {
  font-size: 12px;
  color: gray;
  line-height: 1.2;
}
.btcmcap, .amount span {
  font-weight: bold;
}
.btcmcap {
  margin: 0;
  padding: 0;
  line-height: 2;
  color: green
}
.data {
  margin-right: 16px;
}
.delete-btn {
  position: absolute;
  font-weight: bold;
  color: lightcoral;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 150ms;
  &:hover {
    transform: scale(1.1) rotate(5deg);
    transition: all ease-in-out 150ms;
  }
}
`;