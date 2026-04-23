-- View 1: Lista apenas usuários que já completaram o curso (Graduados ou Pós)
CREATE VIEW view_usuarios_graduados AS
SELECT nome, email, escolaridade 
FROM usuarios 
WHERE escolaridade IN ('Graduação Completa', 'Pós-Graduado', 'Mestre', 'Doutor');

-- View 2: Painel de Controle (Mostra Admins e seus níveis de poder)
CREATE VIEW view_painel_admin AS
SELECT username, 
	CASE -- caso o nivel de acesso for igual ou maior que 5 ele é super se não é moderador
	WHEN nivel_acesso >= 5 THEN 'Super Usuário'
	ELSE 'Moderador'
	END AS cargo -- as é para dar o nome a coluna
FROM admins;