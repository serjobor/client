import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import LogoSVG from "../../components/LogoSVG";
import notFoundImage from "../../assets/notFound.svg";

function ErrorPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <div className="error-header">
        <LogoSVG />
      </div>
      <div className="error-content">
        <div className="error-card">
          <div className="error-image-container">
            <img
              src={notFoundImage}
              alt="Страница не найдена"
              className="error-image"
            />
          </div>

          <div className="error-text-container">
            <h2 className="error-heading">Страница не найдена</h2>
            <p className="error-description">
              Возможно, введён некорректный адрес или страница была удалена.
            </p>
          </div>

          <button
            onClick={handleBackToHome}
            className="back-home-button"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;