import React, { useState } from "react";
import "./RegistrationPage.css";
import LogoSVG from "../../components/LogoSVG";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    birthDate: "",
    phone: "",
    email: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Фамилия обязательна";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Имя обязательно";
    }
    if (!formData.middleName.trim()) {
      newErrors.middleName = "Отчество обязательно";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Дата рождения обязательна";
    } else {
      const selectedDate = new Date(formData.birthDate);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Устанавливаем конец дня
      
      if (selectedDate >= today) {
        newErrors.birthDate = "Дата рождения должна быть в прошлом";
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен";
    } else if (formData.phone.replace(/\D/g, '').length < 11) {
      newErrors.phone = "Введите корректный номер телефона (11 цифр)";
    } else if (formData.phone.replace(/\D/g, '').length > 11) {
      newErrors.phone = "Номер телефона не может содержать более 11 цифр";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Убираем все нецифровые символы
    const numbers = value.replace(/\D/g, '');
    
    // Если нет цифр, возвращаем пустую строку
    if (numbers.length === 0) return '';
    
    // Если первая цифра не 7, добавляем +7
    if (numbers[0] !== '7') {
      const fullNumber = '7' + numbers;
      return formatNumber(fullNumber);
    }
    
    // Если первая цифра 7, форматируем как есть
    return formatNumber(numbers);
  };

  const formatNumber = (numbers: string) => {
    if (numbers.length <= 1) return `+7`;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1, 4)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}`;
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Если пользователь удаляет символы, не форматируем
    if (value.length < formData.phone.length) {
      setFormData(prev => ({
        ...prev,
        phone: value
      }));
      return;
    }
    
    // Ограничиваем длину ввода
    if (value.replace(/\D/g, '').length > 11) {
      return;
    }
    
    const formatted = formatPhoneNumber(value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
    
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет логика регистрации
      console.log("Данные регистрации:", formData);
      navigate('/registration/sopd-request');
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <div className="reg-title">
          <LogoSVG/>
        </div>
        
        <form onSubmit={handleSubmit} className="reg-form">
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`form-input ${errors.lastName ? 'error' : ''}`}
              placeholder="Фамилия"
            //   required
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`form-input ${errors.firstName ? 'error' : ''}`}
              placeholder="Имя"
            //   required
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              className={`form-input ${errors.middleName ? 'error' : ''}`}
              placeholder="Отчество"
            //   required
            />
            {errors.middleName && <span className="error-message">{errors.middleName}</span>}
          </div>

          <div className="form-group">
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className={`form-input ${errors.birthDate ? 'error' : ''}`}
              max={new Date().toISOString().split('T')[0]}
            //   required
            />
            {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="+7 (___) ___-__-__"
              maxLength={18}
              autoComplete="tel"
            //   required
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="example@email.com"
            //   required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <button type="submit" className="reg-button">
            Продолжить
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;