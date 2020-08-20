import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  appearance: none;
  letter-spacing: 0.05rem;
  vertical-align: text-bottom;
  text-decoration: none;
  border: 1px solid #17264d;
  border-radius: 6px;
  outline: none;
  text-align: center;
  padding: 8px 12px;
  width: 100%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 15px;
  background-color: #17264d;
  color: #fff;
  font-weight: bold;
  font-size: 16px;

  button:hover {
    opacity: 0.7;
  }
  button:active {
    opacity: 0.5;
  }
  button:disabled {
    border: 1px solid #c3c3c3;
    background-color: #c3c3c3;
  }
`;

export const Button = ({
  val,
  callback,
  disabled = false,
}: {
  val: string;
  callback: () => void;
  disabled?: boolean;
}) => {
  return (
    <>
      <button onClick={callback} disabled={disabled}>
        {val}
      </button>
      <style jsx>{styles}</style>
    </>
  );
};
