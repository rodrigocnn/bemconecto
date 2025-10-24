# 🧠 BemConecto

**BemConecto** é uma aplicação web desenvolvida em **React** com **TypeScript** e **Next.js**, voltada para **gestão de atendimentos psicológicos**.  
O sistema foi projetado para psicólogos que desejam centralizar o gerenciamento de pacientes, sessões e agendamentos de forma simples, moderna e segura.

Este repositório contém apenas o **frontend** da aplicação — responsável pela interface, experiência do usuário e integração com a API Node Express.

## ✨ Visão Geral

O **BemConecto** oferece uma solução completa para o dia a dia do psicólogo, permitindo organizar a **agenda de atendimentos**, registrar **sessões clínicas** (com observações, intervenções e planos terapêuticos), além de manter um **histórico de pacientes** e **controle de consultas**.

A aplicação foi construída com foco em **usabilidade**, **segurança** e **performance**, proporcionando uma experiência fluida tanto em desktop quanto em dispositivos móveis.

## 🧱 Tecnologias Utilizadas

- **Next.js** (base do projeto)
- **React**
- **TypeScript**
- **Tailwind CSS** (para estilização)
- **React Query** (para gerenciamento de dados assíncronos e cache)
- **Axios** (para comunicação com a API)
- Autenticação via **JWT**

## 🔐 Autenticação

O processo de autenticação é realizado via **JSON Web Token (JWT)**.

Após o login, o token é armazenado de forma segura e utilizado em todas as requisições autenticadas, garantindo o acesso apenas a psicólogos e usuários autorizados.

## 🏠 Funcionalidades Principais

- 📅 **Gestão de Agenda**  
  Visualização e controle completo de compromissos e atendimentos agendados.  
  Inclui status como _Agendado_, _Confirmado_, _Reagendado_, _Concluído_ e _Cancelado_.

- 👩‍⚕️ **Gerenciamento de Pacientes**  
  Cadastro, edição e histórico de pacientes, com informações pessoais, anotações e dados clínicos.

- 🧩 **Sessões Psicológicas**  
  Registro detalhado de cada atendimento: resumo, observações comportamentais, intervenções, hipóteses diagnósticas, planos terapêuticos e técnicas utilizadas.

- 🧾 **Histórico Clínico**  
  Acesso rápido ao histórico de sessões e evoluções de cada paciente.

- 🔒 **Controle de Usuários e Acessos**  
  Perfis diferenciados (Administrador, Psicólogo, Staff), com permissões ajustadas ao papel do usuário.

- 📊 **Dashboard de Indicadores**  
  Visão geral de atendimentos realizados, pacientes cadastrados, sessões por status e outros dados de produtividade.

## 🚀 Deploy

A aplicação está hospedada via **Vercel**:

🔗 [Link para o ambiente de produção](https://bemconecto.vercel.app)

## ⚙️ Instalação e Execução Local

```bash
# Clone o repositório
git clone https://github.com/rodrigocnn/bemconecto.git

# Acesse o diretório
cd bemconecto

# Instale as dependências
npm install

# Crie um arquivo .env com as variáveis de ambiente necessárias (exemplo abaixo)
NEXT_PUBLIC_API_URL=https://api.bemconecto.com
NEXT_PUBLIC_JWT_SECRET=seu_token_aqui

# Execute em modo de desenvolvimento
npm run dev
```

## Estrutura do Projeto

src/
├── assets/ # Arquivos estáticos (ícones, imagens, fontes)
├── components/ # Componentes reutilizáveis da interface
├── hooks/ # Hooks personalizados (autenticação, dados, UI)
├── interfaces/ # Tipagens e interfaces TypeScript globais
├── modules/ # Módulos por domínio (auth, patients, sessions, appointments, dashboard)
├── pages/ # Páginas do Next.js, rotas principais da aplicação
├── services/ # Configuração e chamadas à API com Axios
├── styles/ # Estilizações globais e configuração do Tailwind
└── utils/ # Funções auxiliares e helpers

# 🧾 Backend (referência)

O frontend se comunica com uma API Node + Express + Prisma + PostgreSQL, que contém as seguintes entidades principais:

Psychologists — dados profissionais e credenciais
Patients — informações e histórico dos pacientes
Sessions — registros detalhados de atendimentos psicológicos
Appointments — controle da agenda e status das consultas
Users — gerenciamento de acesso e papéis (Admin, Psicólogo, Staff)

# 🧑‍💻 Contribuindo

No momento, este projeto é privado e não está aberto a contribuições externas.

📸 Screenshots

<p align="center"> <img src="public/bemconecto-dashboard.png" width="600" alt="Dashboard do BemConecto" /> </p>

# 📄 Licença

Este projeto está licenciado sob a MIT License.
