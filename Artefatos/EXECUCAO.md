# Execução dos Testes

Este documento descreve o passo a passo para configurar o ambiente, instalar as dependências e executar os testes automatizados do projeto.

---

# 1. Pré-requisitos

Antes de iniciar, é necessário possuir os seguintes softwares instalados na máquina:

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Git
- Visual Studio Code (opcional, mas recomendado)

Links para instalação:

Node.js  
https://nodejs.org/

Git  
https://git-scm.com/

Visual Studio Code  
https://code.visualstudio.com/

---

# 2. Clonar o repositório

Clone o projeto utilizando o Git:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd qa-calculadora-bcb
```

---

# 3. Instalar as dependências

Instale todas as dependências do projeto utilizando o npm:

```bash
npm install
```

---

# 4. Instalar os navegadores do Playwright

Execute o comando abaixo para instalar os navegadores utilizados pelos testes:

```bash
npx playwright install
```

Esse comando instalará os seguintes navegadores:

- Chromium
- Firefox
- Webkit

---

# 5. Executar os testes automatizados

Para executar todos os testes automatizados utilize o comando:

```bash
npx playwright test
```

---

# 6. Executar os testes com navegador visível

Caso queira visualizar a execução dos testes no navegador:

```bash
npx playwright test --headed
```

---

# 7. Visualizar relatório de execução

Após a execução dos testes, o Playwright gera automaticamente um relatório HTML.

Para abrir o relatório utilize:

```bash
npx playwright show-report
```

O relatório apresentará:

- Status dos testes executados
- Tempo de execução
- Logs de erro
- Evidências da execução

---

# 8. Estrutura do projeto

A estrutura do projeto está organizada da seguinte forma:

```
qa-calculadora-bcb
│
├── Artefatos
│   ├── CENARIOS.md
│   ├── EXECUCAO.md
│   ├── PERFORMANCE.md
│   ├── PRODUTO.md
│   └── RETROSPECTIVA.md
│
├── data
│   └── massa-dados.csv
│
├── tests
│   └── calculadora.spec.js
│
├── package.json
└── playwright.config.js
```

---

# Conclusão

Seguindo os passos descritos acima é possível configurar o ambiente de testes, instalar todas as dependências necessárias e executar os testes automatizados utilizando o Playwright.