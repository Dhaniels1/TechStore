const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'css','style.css'),'utf8');

test('vitrine contém seis produtos fictícios',()=>{
  assert.equal((html.match(/<article class="produto">/g)||[]).length,6);
  for(const item of ['Pulse M1','Arc 75','Vista 27','Nova One','Aura Studio','Orbit Smartwatch']){
    assert.ok(html.includes(item),item);
  }
  assert.match(html, /(sem vendas|não realizamos vendas)/i);
  assert.ok(html.includes('preços'));
});
test('imagens novas substituem todas as fotos antigas',()=>{
  const files=fs.readdirSync(path.join(root,'img'));
  assert.deepEqual(files,['techstore-colecao.webp']);
  const data=fs.readFileSync(path.join(root,'img','techstore-colecao.webp'));
  assert.equal(data.toString('ascii',0,4),'RIFF');
  assert.equal(data.toString('ascii',8,12),'WEBP');
  assert.ok(data.length>20000);
  assert.ok((html.match(/techstore-colecao.webp/g)||[]).length>=9);
  for(const old of ['mouse.jpg','teclado.jpg','monitor.jpg'])
    assert.ok(!html.includes(old));
});
test('links, navegação e acessibilidade',()=>{
  for(const id of ['inicio','produtos','inspiracao','sobre'])
    assert.ok(html.includes(`id="${id}"`));
  assert.ok(html.includes('aria-label="Navegação principal"'));
  assert.ok(html.includes('role="img"'));
  assert.ok(html.includes('rel="noopener noreferrer"'));
  assert.ok(css.includes('@media'));
});
