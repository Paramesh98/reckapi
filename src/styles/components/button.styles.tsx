import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : "#4caf50")};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  width: 40%;
`;
