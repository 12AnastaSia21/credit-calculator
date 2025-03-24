import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TheDefaultPage.sass";

export default function TheDefaultPage() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [showPeriod, setShowPeriod] = useState(false);
  const [months, setMonths] = useState<number>(12); 
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [annualPayment, setAnnualPayment] = useState(false)

  const navigate = useNavigate();
  const handleClosePopup = () => {
    navigate("/"); // Возвращаемся на главную
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);

    if (value && !isNaN(Number(value))) {
      setError(false);
    } else {
      setError(true);
      setShowPeriod(false);
    }
  };

  const handleMonthSelection = (selectedMonths: number) => {
    setMonths(selectedMonths);
  };

  const handleCalculate = () => {
    if (!inputValue.trim() || isNaN(Number(inputValue))) {
      setError(true);
      setShowPeriod(false);
      return;
    }

    setError(false);
    setShowPeriod(true);
    setMonthlyPayment(Number(inputValue) / months);
  };

  return (
    <div className="default-page" onClick={handleClosePopup}>
      <div className="default-page__popup" onClick={(e) => e.stopPropagation()}>
        <button className="default-page__button-close" onClick={handleClosePopup}>
          <img className="default-page__img-close" src="./close.svg" alt="" />
        </button>
        <h1 className="default-page__header">Платежи по кредиту</h1>
        <div className="default-page__text">
          <p className="default-page__text-paragraph">
            Введите сумму кредита и выберите срок, на который вы хотите его
            оформить.
          </p>
          <p className="default-page__text-paragraph">
            Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы
            могли лучше спланировать свои финансы.
          </p>
        </div>
        <div className="default-page__form-info">
          <h2 className="default-page__subtitle">Ваша сумма кредита</h2>
          <input
            className="default-page__form-input"
            placeholder="Введите данные"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              borderColor: error
                ? "rgba(234, 0, 41, 1)"
                : "rgba(223, 227, 230, 1)",
            }}
          />
        </div>
        {error && (
          <p className="default-page__error-message">
            Поле обязательно для заполнения
          </p>
        )}
        <div className="default-page__container-button-calculate">
          <button className="default-page__button-calculate" onClick={handleCalculate}>
            Рассчитать
          </button>
        </div>
        <div className="default-page__months">
          <h2 className="default-page__subtitle">Количество месяцев?</h2>
          <div className="default-page__months-buttons">
            {[12, 24, 36, 48].map((num) => (
              <button
                key={num}
                className={`default-page__months-button ${months === num ? "active" : ""}`}
                onClick={() => handleMonthSelection(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        {showPeriod && (
          <div className="default-page__result-container">
            <h2 className="default-page__subtitle">
              Итого ваш платеж по кредиту:
            </h2>
            <div className="default-page__period">
              <button className={`default-page__button-period ${annualPayment ? "active" : ""}`}
                onClick={() => setAnnualPayment(true)}>в год</button>
              <button className={`default-page__button-period ${!annualPayment ? "active" : ""}`}
                onClick={() => setAnnualPayment(false)}>в месяц</button>
            </div>
            <output className="default-page__output-result">
            {monthlyPayment !== null
                ? `${(annualPayment ? monthlyPayment * 12 : monthlyPayment).toFixed(2)} рублей`
                : ""}
            </output>
          </div>
        )}
        <div className="default-page__container-button-add">
          <button className="default-page__button-add">Добавить</button>
        </div>
      </div>
    </div>
  );
}

