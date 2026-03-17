# Retrospectiva do Desenvolvimento

Este documento apresenta uma retrospectiva do processo de desenvolvimento do desafio técnico, destacando os principais desafios técnicos encontrados, o uso de Inteligência Artificial no processo, as ferramentas utilizadas e possíveis melhorias caso houvesse mais tempo para evolução do projeto.

---

# Desafios técnicos encontrados

Durante o desenvolvimento do desafio, alguns desafios técnicos foram identificados:

## 1. Estrutura da aplicação

A aplicação analisada possui uma estrutura baseada em tecnologias mais antigas e scripts legados, o que dificultou a identificação de alguns elementos da interface durante a automação dos testes.

Alguns elementos apresentaram dificuldades de localização por meio de seletores tradicionais, exigindo diferentes estratégias de identificação dentro da automação.

## 2. Automação da interface

Durante a automação com Playwright, alguns componentes da interface apresentaram instabilidade na automação devido à forma como são carregados na página.

Foi necessário realizar diversas tentativas de seleção de elementos e ajustes nos seletores para garantir que os testes pudessem interagir corretamente com a aplicação.

## 3. Entendimento da regra de negócio

A aplicação trabalha com diversos índices econômicos (IGP-M, IPCA, CDI, Selic, entre outros), que possuem regras de cálculo específicas.

Como o foco do desafio estava na validação funcional da aplicação e não na verificação matemática dos cálculos, os testes foram direcionados para validar o comportamento do sistema e as entradas de dados, em vez de validar os cálculos econômicos em si.

## 4. Comportamento inconsistente em navegadores diferentes

Durante a execução dos testes automatizados foi identificado que a aplicação apresenta comportamento inconsistente em navegadores diferentes, possivelmente devido à estrutura legada da interface. Por esse motivo os testes foram executados utilizando o navegador Chromium para garantir maior estabilidade na automação.

---

## Aprendizado durante o desenvolvimento

Durante o desenvolvimento do desafio foi necessário aprofundar o conhecimento na ferramenta **Playwright**, utilizada para automação dos testes.

Como meu nível de experiência com Playwright ainda é inicial, foi necessário realizar pesquisas adicionais para compreender melhor o funcionamento da ferramenta e a forma correta de implementar os testes automatizados.

Para apoiar esse processo de aprendizado foram utilizados alguns recursos como:

- Vídeos educacionais disponíveis no YouTube
- Discussões e dúvidas consultadas em comunidades técnicas no Discord
- Documentação oficial do Playwright
- Apoio de ferramentas de Inteligência Artificial para esclarecimento de dúvidas

Esse processo contribuiu para ampliar o entendimento sobre automação de testes com Playwright, além de demonstrar a importância da pesquisa contínua e da colaboração com comunidades técnicas durante o desenvolvimento de soluções.

---

# Uso de Inteligência Artificial no processo

Durante o desenvolvimento do desafio, ferramentas de Inteligência Artificial foram utilizadas como apoio para:

- Estruturação da documentação do projeto
- Sugestões de cenários de teste
- Apoio na organização da estrutura do projeto
- Suporte na implementação inicial de scripts de automação com Playwright
- Revisão e melhoria da escrita técnica da documentação

A utilização de IA contribuiu para acelerar o processo de desenvolvimento e auxiliar na organização das ideias, mantendo sempre a análise crítica humana na validação das sugestões.

---

# Justificativa das ferramentas utilizadas

## Playwright

A ferramenta Playwright foi escolhida para a automação dos testes devido às seguintes vantagens:

- Suporte a múltiplos navegadores (Chromium, Firefox e WebKit)
- Facilidade de configuração
- Execução rápida dos testes
- Boa integração com projetos baseados em Node.js
- Geração automática de relatórios de execução

Além disso, o Playwright é uma ferramenta moderna amplamente utilizada em testes de aplicações web.

---

## Lighthouse

Para a análise de performance foi utilizada a ferramenta Lighthouse, disponível nas ferramentas de desenvolvedor do navegador Google Chrome.

O Lighthouse permite avaliar rapidamente aspectos importantes da aplicação, como:

- Performance
- Acessibilidade
- Boas práticas
- SEO

Por ser uma ferramenta simples e integrada ao navegador, foi possível realizar uma análise rápida e objetiva da aplicação.

---

# Melhorias possíveis com mais tempo

Caso houvesse mais tempo para evolução do projeto, algumas melhorias poderiam ser implementadas:

## 1. Expansão da automação de testes

Seria possível aumentar a cobertura dos testes automatizados, incluindo:

- Testes baseados em massa de dados mais extensa
- Testes de regressão automatizados
- Testes adicionais para cada índice disponível na aplicação

---

## 2. Melhor organização da automação

A estrutura de automação poderia ser evoluída utilizando padrões mais avançados, como:

- Separação de camadas de testes
- Centralização de seletores

Isso tornaria o projeto mais escalável e fácil de manter.

---

## 3. Integração com CI/CD

Outra melhoria seria integrar os testes automatizados a um pipeline de integração contínua, permitindo que os testes fossem executados automaticamente a cada alteração no código.

Ferramentas como GitHub Actions ou GitLab CI poderiam ser utilizadas para essa finalidade.

---

# Conclusão

O desenvolvimento deste desafio permitiu realizar uma análise exploratória da aplicação, estruturar cenários de teste, implementar automação básica utilizando Playwright e produzir documentação técnica sobre o processo realizado.

Apesar de algumas limitações relacionadas à estrutura da aplicação analisada, foi possível validar o funcionamento geral do sistema e propor melhorias para evolução futura da solução.