## Работа с бэкендом

Серверный код расположен в `src/server`.

Для запуска сервера используем команду: `npm run server`.

Доступное API:

- `GET` `/api/restaurants` - Вернет рестораны;
- `GET` `/api/menu/segments` - Вернет все сегменты меню;
- `GET` `/api/menu/segments/:segment` - Вернет еду из переданного сегментам;
- `GET` `/api/dish/:id` - Вернет еду по переданному `id`.
