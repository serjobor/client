import { useNavigate } from "react-router-dom";
import "./TestPage.css";
import Header from "../../components/Header/Header";

function TestPage() {
  const navigate = useNavigate();

  // Массив всех доступных роутов из App.tsx
  const routes = [
    {
      path: "/auth",
      name: "Страница авторизации",
      description: "Страница для входа в систему",
      component: "AuthorizationPage"
    },
    {
      path: "/admin",
      name: "Панель администратора",
      description: "Главная страница администратора с управлением документами",
      component: "AdminPage"
    },
    {
      path: "/admin/sopd",
      name: "Редактирование СОПД",
      description: "Страница для редактирования согласия на обработку персональных данных",
      component: "SOPDPage"
    },
    {
      path: "/admin/letter",
      name: "Редактирование шаблона письма",
      description: "Страница для редактирования шаблона письма кандидату",
      component: "LetterTemplatePage"
    },
    {
      path: "/error",
      name: "Ошибка",
      description: "Возможно, введён некорректный адрес или страница была удалена",
      component: "ErrorPage"
    }
  ];

  const handleRouteClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="test-page-container">
      <Header roleName="тестирования"/>

      <div className="test-page-content">
        <div className="test-page-card">
          <h2 className="test-page-title">Доступные маршруты (Routes)</h2>
          <p className="test-page-description">
            Нажмите на любой маршрут ниже, чтобы перейти на соответствующую страницу
          </p>
          
          <div className="routes-grid">
            {routes.map((route, index) => (
              <div 
                key={index} 
                className="route-card"
                onClick={() => handleRouteClick(route.path)}
              >
                <div className="route-header">
                  <h3 className="route-name">{route.name}</h3>
                  <span className="route-path">{route.path}</span>
                </div>
                <p className="route-description">{route.description}</p>
                <div className="route-component">
                  <strong>Компонент:</strong> {route.component}
                </div>
                <div className="route-click-hint">
                  👆 Нажмите для перехода
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;