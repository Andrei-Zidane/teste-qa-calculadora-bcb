# Cenários de Teste – Calculadora do Cidadão

## Objetivo

Validar o funcionamento da aplicação "Calculadora do Cidadão" do Banco Central, responsável por realizar a correção de valores com base em índices econômicos.

---

# 1. Cenários Funcionais

## CT01 – Cálculo de correção com dados válidos (Happy Path)

Descrição:
Validar se o sistema realiza o cálculo corretamente quando todos os campos são preenchidos corretamente.

Passos:
1. Acessar a Calculadora do Cidadão.
2. Selecionar o índice IGP-M (FGV).
3. Informar Data inicial: 01/2020.
4. Informar Data final: 01/2023.
5. Informar Valor: 1000.
6. Clicar em "Corrigir valor".

Resultado esperado:
O sistema apresenta a tela de resultado contendo o valor corrigido e os dados informados.

---

## CT02 – Realizar nova pesquisa após cálculo

Descrição:
Validar se o sistema permite realizar uma nova consulta após um cálculo realizado.

Passos:
1. Realizar um cálculo válido.
2. Clicar no botão "Fazer nova pesquisa".

Resultado esperado:
O sistema retorna para a tela inicial permitindo um novo cálculo.

---

## CT03 – Impressão do resultado do cálculo

Descrição:
Validar se o sistema permite imprimir o resultado do cálculo.

Passos:
1. Realizar um cálculo válido.
2. Clicar no botão "Imprimir".

Resultado esperado:
O sistema abre a tela de impressão com os dados do cálculo.

---

# 2. Cenários de Validação de Campos

## CT04 – Campo valor vazio

Descrição:
Verificar o comportamento do sistema quando o campo valor não é preenchido.

Passos:
1. Selecionar um índice de correção.
2. Informar data inicial válida.
3. Informar data final válida.
4. Deixar o campo valor vazio.
5. Clicar em "Corrigir valor".

Resultado esperado:
O sistema assume valor zero e realiza o cálculo.

---

## CT05 – Campos obrigatórios vazios

Descrição:
Validar se o sistema solicita o preenchimento dos campos obrigatórios.

Passos:
1. Acessar a aplicação.
2. Deixar os campos obrigatórios vazios.
3. Clicar em "Corrigir valor".

Resultado esperado:
O sistema solicita o preenchimento dos campos obrigatórios.

---

## CT06 – Inserção de caracteres no campo valor

Descrição:
Validar se o campo valor aceita apenas números.

Passos:
1. Tentar inserir letras no campo valor (ex: abc).
2. Tentar inserir caracteres especiais (ex: @#$%).

Resultado esperado:
O sistema não deve permitir a inserção de caracteres não numéricos.

---

## CT07 – Inserção de valor negativo

Descrição:
Validar se o sistema impede a inserção de valores negativos.

Passos:
1. Tentar inserir "-100" no campo valor.

Resultado esperado:
O sistema não deve permitir a inserção de valores negativos.

---

# 3. Cenários de Validação de Datas

## CT08 – Data inicial maior que data final

Descrição:
Validar se o sistema impede cálculos quando a data inicial é maior que a data final.

Passos:
1. Selecionar um índice.
2. Informar Data inicial: 01/2023.
3. Informar Data final: 01/2020.
4. Informar valor válido.
5. Clicar em "Corrigir valor".

Resultado esperado:
O sistema impede o cálculo e exibe a mensagem:
"A data final deve ser maior ou igual à data inicial".

---

## CT09 – Datas inválidas

Descrição:
Validar se o sistema identifica datas inválidas.

Passos:
1. Informar Data inicial: 00/2023.
2. Informar Data final: 00/2024.
3. Informar valor válido.
4. Clicar em "Corrigir valor".

Resultado esperado:
O sistema informa que as datas são inválidas.

---

## CT10 – Datas iguais

Descrição:
Validar o comportamento do sistema quando a data inicial e final são iguais.

Passos:
1. Selecionar índice IGP-M.
2. Informar Data inicial: 01/2020.
3. Informar Data final: 01/2020.
4. Informar Valor: 1000.
5. Clicar em "Corrigir valor".

Resultado esperado:
O sistema realiza o cálculo normalmente.

---

# 4. Cenários de Teste de Borda

## CT11 – Valor igual a zero

Descrição:
Verificar o comportamento do sistema quando o valor informado é zero.

Passos:
1. Selecionar índice de correção.
2. Informar datas válidas.
3. Informar Valor: 0.
4. Clicar em "Corrigir valor".

Resultado esperado:
O sistema realiza o cálculo normalmente.

---

## CT12 – Valor muito alto

Descrição:
Validar se o sistema suporta valores elevados.

Passos:
1. Selecionar índice de correção.
2. Informar datas válidas.
3. Informar Valor: 999999999.
4. Clicar em "Corrigir valor".

Resultado esperado:
O sistema calcula o valor corrigido sem apresentar erros.

---

# 5. Cenários de Interface

## CT13 – Navegação entre abas da aplicação

Descrição:
Validar se a navegação entre as abas funciona corretamente.

Passos:
1. Acessar a aplicação.
2. Navegar entre as abas:
   - Índices de preços
   - TR
   - Poupança
   - Selic
   - CDI
   - Taxa Legal

Resultado esperado:
O sistema atualiza corretamente os formulários conforme a aba selecionada.

---

## CT14 – Consistência da tela de resultado

Descrição:
Validar se os dados informados aparecem corretamente na tela de resultado.

Passos:
1. Realizar um cálculo válido.

Resultado esperado:
A tela de resultado deve apresentar:
- Dados informados
- Dados calculados
- Valor corrigido.