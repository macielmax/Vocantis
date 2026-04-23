-- Função que retorna uma mensagem de boas-vindas personalizada
DELIMITER $$
CREATE FUNCTION fn_saudacao_usuario(p_nome VARCHAR(100)) -- pega o parametro inserido nela e mostra a mensagem personalizada
RETURNS VARCHAR(150) DETERMINISTIC
BEGIN
    RETURN CONCAT('Olá, ', p_nome, '! Bem-vindo ao Vocantis.');
END $$
DELIMITER ;

SELECT email, fn_saudacao_usuario(nome) AS mensagem_personalizada FROM usuarios; -- chamou ela e o parametro viro a coluna 'nome' da tabela usuarios