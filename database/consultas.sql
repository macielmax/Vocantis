-- 1. JOIN: Ver se algum Admin também está cadastrado como usuário (pelo nome/user)
SELECT u.nome, a.nivel_acesso FROM usuarios u INNER JOIN admins a ON u.nome = a.username;

-- 2. WHERE e LIKE: Buscar usuários de uma cidade específica que usam Gmail
SELECT * FROM usuarios WHERE cidade = 'Diadema' AND email LIKE '%@gmail.com%';

-- 3. ORDER BY: Listar admins do maior nível para o menor
SELECT * FROM admins ORDER BY nivel_acesso DESC;

-- 4. GROUP BY e COUNT: Quantos usuários temos por cidade
SELECT cidade, COUNT(*) as total FROM usuarios GROUP BY cidade;

-- 5. AVG (Média): Média do nível de acesso dos administradores
SELECT AVG(nivel_acesso) as media_poder_admin FROM admins;