# Parallel-vs-Sequential-I-O
# Web Lab 7 — Async Operations in Node.js

## Опис

У цій практичній роботі реалізовано обробку асинхронних операцій у Node.js, включаючи послідовне та паралельне читання файлів, а також роботу з threadpool.

## Як запустити

1. Встановити залежності (якщо потрібно):

```
npm install
```

2. Запустити файл:

```
node <назва_файлу>.js 3000
```

3. Перевірити через браузер або curl:

```
curl http://127.0.0.1:3000/<route>
```

## Виконані завдання

* **7.1 SEQUENTIAL FILE READS**
  Послідовне читання файлів `a.txt`, `b.txt`, `c.txt`
* **7.2 PARALLEL READS**
  Паралельне читання файлів через `Promise.all`
* **7.3 handle_partial_failures.js**
* **7.4 THREADPOOL LIMIT**
  Запуск 8 паралельних задач через `crypto.pbkdf2` для демонстрації роботи threadpool

## Приклад файлів

```
a.txt -> A
b.txt -> B
c.txt -> C
```

## Перевірка
Для перевірки використовувалась команда:

```
eu-node-basics verify <номер_завдання> <назва_файлу>
```

