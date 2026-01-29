# 📊 Kanban Board

<div align="center">

**Kanban Board interativo com React e Drag & Drop**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

Kanban Board é um aplicativo web interativo estilo **Trello**, desenvolvido com **React** e **Vite**. Permite organizar tarefas em colunas com suporte a **drag & drop** para mover cartões entre diferentes status.

**Link do projeto em produção:** [Acesse aqui](http://192.168.3.100:3000/)

---

## ✨ Funcionalidades

### Core Features
- ✅ **3 Colunas de Status:** A Fazer, Em Progresso, Concluído
- 🖱️ **Drag & Drop Nativo:** Arraste cartões entre colunas
- ➕ **Criar Cartões:** Adicione novas tarefas com título e descrição
- 🗑️ **Excluir Cartões:** Remova tarefas concluídas ou desnecessárias
- 📊 **Contador:** Visualize quantidade de tarefas por coluna

### Interface
- 🎨 **Design Moderno:** Gradientes e sombras suaves
- 📱 **100% Responsivo:** Desktop, Tablet e Mobile
- 🔄 **Hot Reload:** Alterações refletem em tempo real
- ⚡ **Performance Otimizada:** Build com Vite

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 19.2.0 | Biblioteca para construção de UI |
| **Vite** | 7.2.4 | Build tool e dev server |
| **JavaScript ES6+** | - | Linguagem de programação |
| **CSS3** | - | Estilização com Grid e Flexbox |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem com Node.js) ou **yarn**

### 1. Clone o Repositório

```bash
git clone https://github.com/eduardolcouto/kanban-board.git
cd kanban-board
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em:
- **Local:** http://localhost:3000
- **Network:** http://192.168.3.100:3000 (ou seu IP local)

### 4. Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

### 5. Preview do Build de Produção

```bash
npm run preview
```

---

## 📂 Estrutura do Projeto

```
kanban-board/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── App.css         # Estilos do componente principal
│   ├── App.jsx         # Componente principal (Kanban Board)
│   ├── index.css       # Estilos globais
│   └── main.jsx        # Entry point da aplicação
├── .gitignore          # Arquivos ignorados pelo Git
├── eslint.config.js    # Configuração do ESLint
├── index.html          # Template HTML
├── package.json        # Dependências e scripts
├── README.md           # Documentação
└── vite.config.js      # Configuração do Vite
```

---

## 🎯 Escopo Funcional

### Status de Tarefas
As tarefas podem estar em 3 estados diferentes:

1. **📋 A Fazer** (`todo`)
   - Tarefas planejadas ainda não iniciadas

2. **🔄 Em Progresso** (`inprogress`)
   - Tarefas atualmente em desenvolvimento

3. **✅ Concluído** (`done`)
   - Tarefas finalizadas com sucesso

### Operações Suportadas
- ✅ **Criar** nova tarefa com título e descrição opcional
- ✅ **Mover** tarefas entre colunas via drag & drop
- ✅ **Excluir** tarefas de qualquer coluna
- ✅ **Visualizar** contagem de tarefas por status

### Limitações Atuais
- ❌ Dados **não são persistidos** ao recarregar a página
- ❌ **Sem backend** - dados armazenados apenas em memória
- ❌ **Sem autenticação** de usuários
- ❌ **Sem colaboração** em tempo real

---

## 🔮 Próximas Melhorias (Roadmap)

### Curto Prazo
- [ ] 💾 Persistência com `localStorage`
- [ ] 🏷️ Tags/labels coloridas nos cartões
- [ ] 📅 Datas de vencimento
- [ ] 🎨 Cores customizadas para colunas

### Médio Prazo
- [ ] 👥 Múltiplos usuários com autenticação
- [ ] 🔍 Busca e filtros de tarefas
- [ ] 📤 Exportar dados (JSON, CSV)
- [ ] 🎯 Prioridades nos cartões

### Longo Prazo
- [ ] 🌐 Backend com API REST
- [ ] 🔄 WebSocket para colaboração em tempo real
- [ ] 📱 App mobile (React Native)
- [ ] ☁️ Deploy automático (Vercel/Netlify)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um **fork** do projeto
2. Criar uma **branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autores

**Eduardo Couto**
- GitHub: [@eduardolcouto](https://github.com/eduardolcouto)

**MariaBot** 🌸
- Assistente IA - Desenvolvimento e implementação
- Clawdbot Agent

---

## 📞 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma **issue** no repositório.

---

<div align="center">

**Desenvolvido com 💜 usando React + Vite**

[⬆ Voltar ao topo](#-kanban-board)

</div>
