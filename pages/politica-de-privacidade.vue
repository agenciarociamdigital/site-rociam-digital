<template>
  <div>
    <Nav />
    <main class="pagina-simples">
      <h1>Política de Privacidade</h1>
      <p>
        A Rociam Digital valoriza a privacidade e a segurança dos dados de seus usuários. Todas as informações coletadas são utilizadas exclusivamente para melhorar a experiência, personalizar conteúdos e garantir a segurança dos serviços prestados.
      </p>
      <p>
        Não compartilhamos dados pessoais com terceiros sem consentimento, exceto quando exigido por lei. Utilizamos tecnologias seguras para proteger as informações e seguimos as melhores práticas de mercado em proteção de dados.
      </p>
      <p>
        Ao navegar em nosso site, você concorda com a coleta e uso de informações conforme esta política. Caso tenha dúvidas, entre em contato conosco pelo e-mail contato@rociamdigital.com.
      </p>
    </main>
    <Footer />
    <BotaoVoltarTopo />
  </div>
</template>

<script setup>
import Nav from '@/components/global/nav/Nav.vue'
import Footer from '@/components/global/footer/Footer.vue'
import BotaoVoltarTopo from '@/components/global/BotaoVoltarTopo.vue'
</script>

<style scoped>
.pagina-simples {
  max-width: 700px;
  margin: 0 auto;
  padding: 4.5rem 1.5rem 4rem 1.5rem;
  background: var(--cinza-solido);
  color: var(--cor-branco);
  font-family: var(--regular), Arial, sans-serif;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
}

h1 {
  color: var(--azul-digital);
  font-size: var(--f5);
  margin-bottom: 2rem;
  font-family: var(--bold), Arial, sans-serif;
  text-align: left;
}

p {
  font-size: var(--f2);
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: var(--cor-branco);
}

/* Responsivo Tablet */
@media screen and (max-width: 768px) {
  .pagina-simples {
    margin: 2rem 1.5rem;
    padding: 3rem 2rem;
    border-radius: 20px;
  }
  
  h1 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

/* Responsivo Mobile */
@media screen and (max-width: 480px) {
  .pagina-simples {
    margin: 1.5rem 1.25rem;
    padding: 2.5rem 1.5rem;
    border-radius: 18px;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.25;
    font-weight: 800;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }
}
</style> 