import { useState } from "react";
import "./TheDefaultPage.sass";

export default function TheDefaultPage() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleCalculate = () => {
    if (!inputValue.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  };

  return (
    <div className="default-page">
      <button className="default-page__button-close">
        <img className="default-page__img-close" src="./close.svg" alt=""></img>
      </button>
      <h1 className="default-page__header">Платежи по кредиту</h1>
      <div className="default-page__text">
        <p className="default-page__text-paragraph">
          Введите сумму кредита и выберите срок, на который вы хотите его
          оформить.
        </p>
        <p className="default-page__text-paragraph">
          Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
          лучше спланировать свои финансы.
        </p>
      </div>
      <div className="default-page__form-info">
        <h2 className="default-page__subtitle">Ваша сумма кредита</h2>
        <input
          className="default-page__form-input"
          placeholder="Введите данные"
          value={inputValue}
          onChange={handleInputChange}
          style={{ borderColor: error ? "rgba(234, 0, 41, 1)" : "rgba(223, 227, 230, 1)" }}
        />
      </div>
      {error && <p className="default-page__error-message">Поле обязательно для заполнения</p>}
      <div className="default-page__container-button-calculate">
        <button className="default-page__button-calculate" onClick={handleCalculate}>Рассчитать</button>
      </div>
      <div className="default-page__months">
        <h2 className="default-page__subtitle">Количество месяцев?</h2>
        <div className="default-page__months-buttons">
          <button className="default-page__months-button">12</button>
          <button className="default-page__months-button">24</button>
          <button className="default-page__months-button">36</button>
          <button className="default-page__months-button">48</button>
        </div>
      </div>
      <div className="default-page__result-container">
        <h2 className="default-page__subtitle">Итого ваш платеж по кредиту:</h2>
        <div className="default-page__period">
          <button className="default-page__button-period">в год</button>
          <button className="default-page__button-period">в месяц</button>
        </div>
        <output className="default-page__output-result">20 000 рублей</output>
      </div>
      <div className="default-page__container-button-add">
        <button className="default-page__button-add">Добавить</button>
      </div>
    </div>
  );
}
