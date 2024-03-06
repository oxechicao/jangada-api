# Jangada API

- NestJS
- PostgreSQL
- TypeORM

Esse projeto seguirá o padrão recomendado pelo NestJS com o adicional de que será organizados em modulos/domínios de contexto, ao invés de separar em várias pastas cada tipo de arquivo.

Por exemplo:

```
domain/
  domain.controler.ts
  domain.controler.spec.ts
  domain.entity.spec.ts
  domain.repository.spec.ts
```

## Database

```mermaid
---
title: Item relationships
---

erDiagram
  item 1+--1 transactionTypes : has
  item 1+--1 transactionOrigins : has
  item 1+--1 periodTypes : has
  item 1+--1 categories : has

  item {
    uuid _id PK
    string name
    number currentInstallment
    number totalInstallment
    number value
    date purchaseDate
    date lastPaymentDate
    string iDtransactionType FK
    string iDperiodType FK
    string iDcategory FK
    string iDtransactionOrigin FK
    date createdAt
    date updatedAt
    date deletedAt
  }

  transactionTypes {
    uuid _id PK
    string name
    date createdAt
    date updatedAt
    date deletedAt
  }

  transactionOrigins {
    uuid _id PK
    string name
    date createdAt
    date updatedAt
    date deletedAt
  }

  periodTypes {
    uuid _id PK
    string name
    date createdAt
    date updatedAt
    date deletedAt
  }

  categories {
    uuid _id PK
    string name
    date createdAt
    date updatedAt
    date deletedAt
  }

```
