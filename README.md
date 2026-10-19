# TechStore — Vitrine fictícia de tecnologia

Projeto de frontend para demonstrar design responsivo, HTML semântico, composição de produtos e apresentação profissional de interfaces usando **HTML5 e CSS3**, sem framework JavaScript.

**Atenção:** TechStore é uma **marca fictícia**. Produtos, nomes, preços e características são ilustrativos. Não existe loja física, estoque, entrega, pagamento nem canal de atendimento associado ao site.

**Repositório:** https://github.com/Dhaniels1/TechStore

**Site demonstrativo:** https://dhaniels1.github.io/TechStore/ (publicação sujeita à conclusão do GitHub Pages).

## Principais seções

- Hero com fotografia conceitual de estação de trabalho.
- Seis conceitos fictícios: Mouse Pulse M1, Teclado Arc 75, Monitor Vista 27, Smartphone Nova One, Fones Aura Studio e Orbit Smartwatch.
- Galeria de inspiração com três imagens adicionais de setups e acessórios.
- Seção Sobre que explica a finalidade acadêmica.
- Navegação por âncoras e design adaptável a diferentes telas.

## Imagens geradas por IA

Todas as imagens de produtos e ambientes exibidas pelo site foram **geradas por IA** especialmente para a reformulação visual, com estilo azul e iluminação cinematográfica. Não representam itens existentes nem confirmam especificações técnicas.

Foram reunidos **dez recortes fotográficos** em um arquivo WebP otimizado: `img/techstore-colecao.webp`. Cada cartão recorta seu quadro do arquivo por meio de um elemento SVG `viewBox` com acessibilidade textual.

O material antigo `img/mouse.jpg`, `img/teclado.jpg` e `img/monitor.jpg` foi excluído da versão atual do Git, permanecendo apenas no histórico Git anterior.

## Executar localmente

Clone o repositório e abra `index.html` no navegador; não há instalação de dependências nem backend.

```bash
git clone https://github.com/Dhaniels1/TechStore.git
cd TechStore
python -m http.server 8000
```

Abra `http://localhost:8000`, ou use diretamente o arquivo `index.html`.

## Testes e publicação

```bash
node --test tests/vitrine.test.cjs
```

Os testes verificam a integridade do atlas, a quantidade de cartões, os links e o aviso sobre o caráter fictício do conteúdo. O workflow em `.github/workflows/verificacao.yml` roda a auditoria em pushes e pull requests.

A publicação usa GitHub Pages, sem banco de dados, autenticação, gerenciamento de pedidos ou fluxo comercial.

## Organização

- `index.html`: estrutura e conteúdo da página.
- `css/style.css`: estilo visual e responsividade.
- `img/techstore-colecao.webp`: ilustrações otimizadas geradas por IA.
- `tests/vitrine.test.cjs`: verificações de integridade.

Projeto acadêmico demonstrativo; links do GitHub servem para apresentar o código, não para vender produtos.
