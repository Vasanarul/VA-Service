import styled from 'styled-components';

const Remind = styled.button`
  color: rgb(40, 40, 40);
  background-color: rgb(255, 255, 255);
  Font being Rendered: Maison Neue Book;
  transition: all 0.25s ease-in-out !important;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  line-height: 21px;
  vertical-align: baseline;
  letter-spacing: normal;
  margin: 0px;
  padding: 0px 18px;
  font-weight: 500;
  text-align: right;
  Element Type: button;
  Element Class: bttn, bttn-medium, bttn-white, shadow-button, w100p;
  flex:1;
  display: flex;
  justify-content: flex-start;
  transform: translateX(120px);

  &:hover:not(:disabled) {
    outline: 1px solid #282828;
  }
`

export default Remind;