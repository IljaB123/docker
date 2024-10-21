# Используйте базовый образ Node.js
FROM node:14

# Установите рабочую директорию
WORKDIR /usr/src/app

# Скопируйте package.json и установите зависимости
COPY package*.json ./
RUN npm install

# Скопируйте файлы приложения
COPY . .

# Откройте порт 3000
EXPOSE 3000

# Запустите приложение
CMD ["node", "index.js"]
