# Guia de Deploy (Hospedagem) - Grátis

Para colocar seu portfólio no ar e qualquer pessoa acessar, o processo se chama **Deploy**.
A melhor opção para projetos Next.js (como o seu) é a **Vercel** (criadora do Next.js), que possui um plano **Hobby gratuito** excelente para portfólios.

## 1. Preparação (GitHub)
Você já deve ter seu código no GitHub (vi que você configurou links para lá). Verifique se a versão mais recente do seu código está no repositório.
- Se o projeto não estiver no GitHub, você precisa subir ele primeiro.

## 1.1 Comandos para subir (Manual)
Se você criou um repositório novo no GitHub ("New Repository"), siga estes passos no terminal (VS Code):

1.  **Salvar as alterações:**
    ```bash
    git add .
    ```
2.  **Confirmar o pacote ("Commit"):**
    ```bash
    git commit -m "Meu portfolio atualizado"
    ```
3.  **Conectar ao GitHub (Só na primeira vez):**
    *Copie o link do seu repositório vazio no GitHub (ex: https://github.com/seu-usuario/meu-portfolio.git)*
    ```bash
    git remote add origin <LINK_DO_SEU_REPO>
    git branch -M main
    ```
4.  **Enviar para a nuvem ("Push"):**
    ```bash
    git push -u origin main
    ```

*Dica: Nas próximas vezes, você só precisa fazer o passo 1, 2 e depois `git push`.*

## 2. Criar conta na Vercel
1. Acesse [vercel.com](https://vercel.com).
2. Clique em **Sign Up**.
3. Escolha **Continue with GitHub**. Isso é importante para conectar seu repositório automaticamente.

## 3. Importar o Projeto
1. No dashboard da Vercel, clique em **Add New...** -> **Project**.
2. Você verá uma lista dos seus repositórios do GitHub.
3. Encontre o repositório do seu portfólio e clique em **Import**.

## 4. Configuração (Geralmente Automático)
A Vercel geralmente detecta que é um projeto Next.js automaticamente.
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (ou `next build`)
- **Output Directory:** `.next`
- **Environment Variables:** Se você usar chaves de API secretas, adicione aqui. (Para este portfólio estático, provavelmente não precisa de nada por enquanto).

4. Clique em **Deploy**.

## 5. Pronto!
- A Vercel vai construir seu site (pode levar 1-2 minutos).
- Quando terminar, você receberá um link automático (ex: `seu-nome.vercel.app`).
- Esse link é público e você pode mandar para todo mundo!
- **Domínio Personalizado:** Se quiser um `.com.br`, você terá que comprar o domínio (ex: na Registro.br ou GoDaddy) e configurar na Vercel (Settings -> Domains). Mas o endereço `.vercel.app` é grátis para sempre.

## Dica Pro: Atualizações Automáticas
Como você conectou com o GitHub, toda vez que você fizer um `git push` para subir uma alteração no código, a Vercel vai detectar e atualizar o site sozinha em minutos!

## Dúvida Comum: "Preciso pagar para ter .com?"
- **Hospedagem (Onde o site mora):** GRÁTIS na Vercel.
- **Endereço (O nome do site):**
    - `seunome.vercel.app` -> **Grátis** (Vercel te dá).
    - `www.seunome.com.br` -> **Pago** (~R$ 40,00 por ano no Registro.br).
    - `www.seunome.com` -> **Pago** (~R$ 60-100 por ano no GoDaddy/Namecheap).

**Resumo:** O site em si é de graça. Só paga se quiser o nome "bonito". Se comprar o nome, você configura ele na Vercel **sem custo extra**.
