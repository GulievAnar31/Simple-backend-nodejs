# Makefile

# Запускает приложение в Docker
start:
	@echo "Starting application..."
	@docker-compose up --build -d
	@echo "Opening API docs in the browser..."
	@sleep 5
	@open http://localhost:3000/api-docs/#/ || xdg-open http://localhost:3000/api-docs/#/ || start http://localhost:3000/api-docs/#/

# Останавливает приложение и удаляет контейнеры
stop:
	@echo "Stopping application..."
	@docker-compose down

# Выводит логи приложения
logs:
	@docker-compose logs -f

# Очищает все (останавливает приложение, удаляет контейнеры, с
