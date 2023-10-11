# Makefile

# Запускает приложение в Docker
start:
	@echo "Starting application..."
	@docker-compose up --build

# Останавливает приложение и удаляет контейнеры
stop:
	@echo "Stopping application..."
	@docker-compose down

# Выводит логи приложения
logs:
	@docker-compose logs -f

# Очищает все (останавливает приложение, удаляет контейнеры, с
