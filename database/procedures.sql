-- Procedure 1: Atualizar a cidade de um usuário (Ação do sistema)
DELIMITER $$
CREATE PROCEDURE sp_atualizar_cidade(p_id INT, p_nova_cidade VARCHAR(100)) -- parametros
BEGIN
    UPDATE usuarios SET cidade = p_nova_cidade WHERE id = p_id; -- muda a cidade da tabela usuarios onde o p_id é igual a o id da tabela usuarios
END $$

-- Procedure 2: Promover um Admin de nível
CREATE PROCEDURE sp_promover_admin(p_username VARCHAR(50), p_novo_nivel INT)
BEGIN
    UPDATE admins SET nivel_acesso = p_novo_nivel WHERE username = p_username; -- mesma coisa que a de cima só que muda o nivel e é pelo username
END $$
DELIMITER ;