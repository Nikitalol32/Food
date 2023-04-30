## Работа с тестами

Для тестов используется `cypress`.

Чтобы запустить тесты надо:

- Запустить сервера командой `npm run run:servers` в одной консольке;
- Запустить тесты в другой выполнил `npm run cy:run` или `npm run cy:open`.

Сами тесты находятся в папке `cypress/e2e`.

Подпапка `api` для тестов бэкенда, можно создавать дополнительные файлы, например `dishes.spec.cy.ts`. Подпапка `frontend` для тестов `frontenda`.

## Работа с бэкендом

Серверный код расположен в `src/server`.

Для запуска сервера используем команду: `npm run server`.

Доступное API:

- `GET` `http://localhost:5540/api/restaurants` - Вернет рестораны;
- `GET` `http://localhost:5540/api/menu/segments` - Вернет все сегменты меню;
- `GET` `http://localhost:5540/api/menu/segments/:segment` - Вернет еду из переданного сегментам;
- `GET` `http://localhost:5540/api/dish/:id` - Вернет еду по переданному `id`.
