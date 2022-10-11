import React from "react";
import { ButtonStyle } from "../styles/components/button.styles";

/**
 * Button
 * @param lable onclick disabled
 * @returns jsx
 */

function Button({
  label,
  onclick,
  disabled,
}: {
  label: string;
  onclick: () => void;
  disabled: boolean;
}) {
  return (
    <ButtonStyle onClick={onclick} disabled={disabled}>
      {label}
    </ButtonStyle>
  );
}

export default Button;
