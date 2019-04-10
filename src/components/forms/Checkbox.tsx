import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  id: string;
  name: string;
  value: string | number;
  label: string;
  onClick?: (event: any) => void;
}

const Checkbox: React.SFC<Props> = ({ id, name, value, label, onClick }) => {
  const Body = styled.div`
    margin: 0 20px 10px 0;
    user-select: none;

    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease;
    }
  `;

  const Input = styled.input`
    &&&& {
      appearance: none;
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 2px solid #fff;
      background: transparent;
      vertical-align: middle;
      cursor: pointer;
    }
  `;

  const Label = styled.label`
    &&&& {
      position: relative;
      top: 2px;
      padding-left: 40px;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 0 solid #fff;
        border-top: none;
        border-right: none;
        transform: translate(-26px,11px) rotate(-90deg);
        transform-origin: 50% 50%;
        transition: all 0.2s ease;
      }

      input:checked + &:before {
        width: 18px;
        height: 10px;
        border-width: 3px;
        transform: translate(-34px, 5px) rotate(-45deg);
      }
    }
  `;

  return (
    <Body>
      <Input type="checkbox" id={id} name={name} value={value} onClick={onClick} />
      <Label htmlFor={id}>{label}</Label>
    </Body>
  );
};

export default Checkbox;
