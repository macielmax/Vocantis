USE vocantis_db;
-- Inserindo 5 Usuários com perfis variados para teste
INSERT INTO usuarios (nome, email, escolaridade, cidade, senha) VALUES 
('Lucas Silva', 'lucas.silva@gmail.com', 'Técnico', 'Diadema', 'senha123'),
('Beatriz Santos', 'bia.santos@outlook.com', 'Graduação Completa', 'São Bernardo', 'bia@2024'),
('Carlos Oliveira', 'carlos.edu@gmail.com', 'Ensino Médio Completo', 'Diadema', 'cadu99'),
('Fernanda Lima', 'fer.lima@yahoo.com.br', 'Pós-Graduado', 'Santo André', 'nanda_root'),
('Ricardo Souza', 'ricardo.souza@gmail.com', 'Mestre', 'São Paulo', 'ric12345');

-- Inserindo 2 Administradores com diferentes níveis de acesso
-- Nível 5: Super Admin (Acesso Total)
-- Nível 1: Moderador (Acesso Básico)
INSERT INTO admins (username, nivel_acesso) VALUES 
('admin_master', 5),
('moderador_voca', 1);