# QA Automation – Calculadora do Cidadão (Banco Central)

Projeto desenvolvido como parte de um desafio técnico para validar funcionalidades da aplicação **Calculadora do Cidadão**, disponibilizada pelo Banco Central do Brasil.

O objetivo do projeto é realizar uma **análise exploratória da aplicação**, definir **cenários de teste**, implementar **automação básica utilizando Playwright** e produzir documentação técnica sobre a qualidade do produto.

---

# Aplicação testada

Calculadora do Cidadão – Banco Central do Brasil

https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPorIndice.do?method=corrigirPorIndice

A aplicação permite realizar cálculos de correção monetária utilizando diferentes índices econômicos, como:

- IGP-M
- IPCA
- CDI
- Selic
- TR
- Poupança

---

# Objetivos do projeto

Este projeto foi desenvolvido com os seguintes objetivos:

- Realizar **testes exploratórios** da aplicação
- Criar **cenários de teste documentados**
- Desenvolver **scripts de automação com Playwright**
- Avaliar **aspectos de performance da aplicação**
- Propor **melhorias para o produto**
- Documentar o processo de desenvolvimento

---

# Tecnologias utilizadas

As seguintes tecnologias foram utilizadas no projeto:

- Node.js
- Playwright
- JavaScript
- Lighthouse (Chrome DevTools)
- Git

---

# Estrutura do projeto

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
│   ├── carregamento.spec.js
│   ├── elementos.spec.js
│   └── calculadora.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Cenários de teste

Os cenários de teste foram definidos com base em testes exploratórios da aplicação.

Eles incluem:

- Fluxo principal da aplicação (happy path)
- Validação de campos
- Validação de datas
- Testes de borda
- Testes de interface

A documentação completa pode ser encontrada em:

```
Artefatos/CENARIOS.md
```

---

# Automação de testes

A automação foi implementada utilizando **Playwright**, ferramenta moderna para automação de aplicações web.

Foram criados scripts para validar:

- carregamento da aplicação
- presença de elementos da interface
- tentativa de automação do fluxo principal de cálculo

Os testes estão localizados em:

```
tests/
```

---

# Análise de performance

A análise de performance foi realizada utilizando **Lighthouse (Chrome DevTools)**.

Foram avaliados os seguintes aspectos:

- Performance
- Acessibilidade
- Boas práticas
- SEO

Resultados detalhados podem ser encontrados em:

```
Artefatos/PERFORMANCE.md
```

---

# Diagnóstico do produto

Durante os testes foram identificadas oportunidades de melhoria relacionadas a:

- interface do usuário
- feedback visual
- usabilidade da aplicação
- possíveis novas funcionalidades

Mais detalhes disponíveis em:

```
Artefatos/PRODUTO.md
```

---

# Execução do projeto

As instruções para configurar o ambiente e executar os testes estão disponíveis em:

```
Artefatos/EXECUCAO.md
```

---

# Retrospectiva

O documento de retrospectiva apresenta:

- desafios técnicos encontrados
- uso de Inteligência Artificial no processo
- justificativa das ferramentas utilizadas
- possíveis melhorias futuras

Disponível em:

```
Artefatos/RETROSPECTIVA.md
```

---

# Considerações finais

Este projeto teve como objetivo demonstrar habilidades relacionadas a:

- análise exploratória
- criação de cenários de teste
- automação básica de testes
- documentação técnica
- pensamento crítico sobre qualidade de software

Mesmo tratando-se de uma aplicação baseada em tecnologias mais antigas, foi possível realizar uma análise funcional da aplicação e estruturar um projeto de testes organizado e documentado.

---

# Autor

Projeto desenvolvido por **Andrei Zidane**