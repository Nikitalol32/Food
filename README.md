## Работа с бэкендом

Серверный код расположен в `src/server`.

Для запуска сервера используем команду: `npm run server`.

Доступное API:

- `GET` `http://localhost:5540/api/restaurants` - Вернет рестораны;
- `GET` `http://localhost:5540/api/menu/segments` - Вернет все сегменты меню;
- `GET` `http://localhost:5540/api/menu/segments/:segment` - Вернет еду из переданного сегментам;
- `GET` `http://localhost:5540/api/dish/:id` - Вернет еду по переданному `id`.
