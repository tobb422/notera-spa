import * as React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .form {
    width: 100%;
  }

  input {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 6px;
    outline: 0;
    width: calc(100% - 16px);
    height: 32px;
    padding-left: 16px;
  }
  input::placeholder {
    color: #c3c3c3;
  }
  input.valid {
    border-color: #17264d;
  }
  input.invalid {
    border-color: #ff8562;
  }

  .error {
    margin: 0.5rem 0;
    font-size: 12px;
    font-weight: lighter;
    color: #ff8562;
  }
`;

interface Props {
  id: string;
  label?: string;
  inputType: string;
  placeholder: string;
  value: string;
  changeCallBack?: (value: string) => void;
  required?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  errors: string[];
}

export const Input = ({
  id,
  label,
  inputType,
  placeholder,
  value,
  changeCallBack,
  required,
  readOnly,
  min,
  max,
  errors,
}: Props) => {
  const [isDirty, setIdDirty] = React.useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!isDirty) setIdDirty(true);
    if (changeCallBack) changeCallBack(e.currentTarget.value);
  };

  const hasError = () => errors.length > 0;
  const showError = () => isDirty && hasError();

  return (
    <div>
      <div className="wrapper">
        {label && <p className="label">{label}</p>}
        <div className="form">
          <input
            id={id}
            className={`
              ${showError() && 'invalid'}
              ${!hasError() && isDirty && 'valid'}
            `}
            type={inputType}
            name={id}
            placeholder={placeholder}
            value={value}
            required={required}
            min={min ? min : 1}
            max={max ? max : 128}
            onChange={onChange}
            readOnly={readOnly}
          />
        </div>
      </div>
      {showError() && (
        <ul className="error">
          {errors.map((error: string) => {
            return <li key={error}>・{error}</li>;
          })}
        </ul>
      )}
      <style jsx>{styles}</style>
    </div>
  );
};
