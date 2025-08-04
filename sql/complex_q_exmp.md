Below is a **ready-to-memorize mini “cheat sheet.”**
It gives you a realistic schema, a few sample rows (helps you picture the data), and **production-quality queries** for every task the Apple panel listed.
Everything is ANSI-SQL and runs unchanged in Postgres, MySQL, or SQLite (except the `SERIAL` keyword—use `AUTO_INCREMENT` in MySQL). Feel free to copy-paste into CoderPad and play with it beforehand.

---

## 1. Schema you can expect

```sql
-- ❶ Products currently for sale
CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  name        TEXT        NOT NULL,
  price_cents INTEGER     NOT NULL,
  stock_qty   INTEGER     NOT NULL      -- on-hand inventory
);

-- ❷ Registered customers
CREATE TABLE customers (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- ❸ Each checkout
CREATE TABLE orders (
  id           SERIAL PRIMARY KEY,
  customer_id  INTEGER REFERENCES customers(id),
  ordered_at   TIMESTAMP DEFAULT NOW()
);

-- ❹ Line items inside an order
CREATE TABLE order_items (
  id         SERIAL PRIMARY KEY,
  order_id   INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity   INTEGER NOT NULL
);
```

### Tiny seed data (optional, helps you sanity-check)

```sql
INSERT INTO products  (name, price_cents, stock_qty) VALUES
  ('iPhone 15', 99900, 100),
  ('iPad Pro',  79900,  50),
  ('AirPods',   24900, 200),
  ('MacBook',  129900,  40);

INSERT INTO customers (name) VALUES ('Alice'), ('Bob');

-- Alice places two orders, Bob one
INSERT INTO orders (customer_id, ordered_at) VALUES
  (1, '2025-06-01'), (1, '2025-06-02'), (2, '2025-06-03');

INSERT INTO order_items (order_id, product_id, quantity) VALUES
  (1, 1, 2),           -- 2 × iPhone
  (1, 3, 4),           -- 4 × AirPods
  (2, 2, 1),           -- 1 × iPad
  (3, 1, 1),           -- Bob buys one iPhone
  (3, 4, 1);           -- …and one MacBook
```

---

## 2. Interview tasks & bullet-proof queries

### A. “Top products by order volume”

Return every product plus total sold, sorted greatest first; add `LIMIT 10` if only the top ten are needed.

```sql
SELECT
  p.id,
  p.name,
  SUM(oi.quantity)       AS total_sold
FROM products      p
JOIN order_items   oi ON oi.product_id = p.id
GROUP BY p.id, p.name
ORDER BY total_sold DESC;
```

> **Why this wins:**
>
> * Pure aggregation; no `DISTINCT` mis-use.
> * Works even if a product hasn’t sold yet (see task C).

---

### B. “Top 10 customer orders”

*(Interpretation 1 – biggest monetary orders)*

```sql
SELECT
  o.id                       AS order_id,
  c.name                     AS customer,
  SUM(oi.quantity * p.price_cents) / 100.0  AS order_total_usd
FROM orders        o
JOIN customers     c  ON c.id = o.customer_id
JOIN order_items   oi ON oi.order_id = o.id
JOIN products      p  ON p.id = oi.product_id
GROUP BY o.id, c.name
ORDER BY order_total_usd DESC
LIMIT 10;
```

*(Interpretation 2 – most items, regardless of price)* — just change the `SELECT` / `ORDER BY` to `SUM(oi.quantity) AS items_total`.

---

### C. “Products with **no** associated orders”

```sql
SELECT p.*
FROM   products p
LEFT   JOIN order_items oi ON oi.product_id = p.id
WHERE  oi.product_id IS NULL;
```

> **Tip if they ask “what index would help?”**
> A single‐column index on `order_items.product_id` turns the LEFT JOIN anti-pattern into an index-only scan.

---

### D. “Detect mismatches: ordered > stock (stockouts)”

```sql
SELECT
  p.id,
  p.name,
  p.stock_qty,
  COALESCE(SUM(oi.quantity), 0) AS ordered_qty,
  COALESCE(SUM(oi.quantity), 0) - p.stock_qty AS excess_demand
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.id
GROUP BY p.id, p.name, p.stock_qty
HAVING COALESCE(SUM(oi.quantity), 0) > p.stock_qty;
```

*Flip the comparison (`<`) if they also want “over-stocked” items.*

---

## 3. Patterns worth memorising

| Pattern                        | Template                                                                                     | When to reach for it                 |
| ------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Aggregate & rank**           | `GROUP BY ... ORDER BY SUM(...) DESC LIMIT N`                                                | leaderboards, top-N lists            |
| **Anti-join (find “orphans”)** | `LEFT JOIN … WHERE right.col IS NULL`                                                        | “no orders”, “no matching row”       |
| **Mismatch check**             | aggregate both sides, compare in `HAVING`                                                    | stock vs sales, payments vs invoices |
| **Index hint**                 | create composite index on foreign keys used in joins (e.g., `(product_id)` on `order_items`) | speeds up JOINs & anti-joins         |

---

### Lightning recap

1. **JOIN → GROUP → FILTER** is 80 % of real SQL interview work.
2. **Use `COALESCE`** when LEFT JOIN rows might be `NULL` but you still need math.
3. Keep your **calculated columns in `SELECT`, not in `HAVING`** unless you must filter by them (as in task D).

Print this page or copy the blocks into your personal notes. A quick glance right before Round 3 will jog your memory and you’ll look confident in CoderPad.

Good luck—you’ve got this! 🍀
