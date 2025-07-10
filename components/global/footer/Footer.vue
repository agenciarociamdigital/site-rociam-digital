<template>
  <!-- Footer -->
  <footer>
    <div class="container">
      <!-- Seção principal do footer -->
      <div class="footer-content">
        <!-- Coluna 1: Logo e descrição -->
        <div class="footer-section about">
          <div class="logo">
            <img 
              src="~/assets/images/logotipo_rociam_branca.png" 
              alt="Rociam Digital" 
              class="footer-logo"
            >
          </div>
          <p class="description">
            Transformamos ideias em soluções digitais inovadoras. 
            Especializados em desenvolvimento web e marketing digital.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/rociamdigital" target="_blank" aria-label="Instagram" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rociam-digital/" target="_blank" aria-label="LinkedIn" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://wa.me/5551982455694" target="_blank" aria-label="WhatsApp" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2: Links rápidos -->
        <div class="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/solucoes">Soluções</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <!-- Coluna 3: Serviços -->
        <div class="footer-section services">
          <h3>Nossas Soluções</h3>
          <ul>
            <li><a href="/solucoes/geracao-de-leads">Geração de Leads Qualificados</a></li>
            <li><a href="/solucoes/trafego-pago">Gestão de Tráfego Pago</a></li>
            <li><a href="/solucoes/desenvolvimento-web">Desenvolvimento Web Estratégico</a></li>
            <li><a href="/solucoes/crm">Implementação e Otimização de CRM</a></li>
            <li><a href="/solucoes/whatsapp-marketing">WhatsApp e E-mail Marketing</a></li>
          </ul>
        </div>

        <!-- Coluna 4: Contato -->
        <div class="footer-section contact">
          <h3>Contato</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>(55) 9 8245-5694</span>
            </div>
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>contato@rociamdigital.com</span>
            </div>
            <div class="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Lajeado, RS - Brasil</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Linha divisória -->
      <div class="footer-divider"></div>

      <!-- Rodapé inferior -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} Rociam Digital. Todos os direitos reservados.</p>
        </div>
        <div class="footer-bottom-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <span class="separator">|</span>
          <a href="/termos-de-uso">Termos de Uso</a>
        </div>
        <div class="developed-by">
          <p>Desenvolvido por <span class="marca">Rociam Digital Tech</span></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Ano atual para o copyright
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Newsletter Section */
.newsletter-section {
  background: linear-gradient(135deg, var(--cinza-solido) 0%, rgba(51, 51, 51, 0.95) 100%);
  color: var(--cor-branco);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.newsletter-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(0, 51, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 204, 153, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.newsletter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.newsletter-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.newsletter-text {
  max-width: 500px;
}

.newsletter-title {
  font-family: var(--bold);
  font-size: var(--f6);
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.newsletter-description {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-gelo);
  line-height: 1.6;
  opacity: 0.9;
}

.newsletter-form {
  max-width: 500px;
  margin-left: auto;
}

.newsletter-form-container {
  width: 100%;
}

.input-group {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 0.5rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.input-group:focus-within {
  border-color: var(--azul-digital);
  box-shadow: 0 0 0 3px rgba(0, 51, 255, 0.1);
}

.newsletter-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem 1.5rem;
  color: var(--cor-branco);
  font-family: var(--regular);
  font-size: var(--f2);
  outline: none;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f2);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 140px;
  justify-content: center;
}

.newsletter-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 51, 255, 0.3);
}

.newsletter-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.newsletter-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.newsletter-button:hover .newsletter-icon {
  transform: translateX(3px);
}

.newsletter-privacy {
  font-family: var(--regular);
  font-size: var(--f1);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 1rem;
}

.privacy-link {
  color: var(--verde-conectado);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.privacy-link:hover {
  border-bottom-color: var(--verde-conectado);
}

/* Responsividade */
@media screen and (max-width: 1024px) {
  .newsletter-content {
    gap: 3rem;
  }
  
  .newsletter-title {
    font-size: var(--f5);
  }
}

@media screen and (max-width: 768px) {
  .newsletter-section {
    padding: 4rem 0;
  }
  
  .newsletter-container {
    padding: 0 1.5rem;
  }
  
  .newsletter-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .newsletter-form {
    margin-left: 0;
  }
  
  .newsletter-title {
    font-size: var(--f4);
  }
  
  .newsletter-description {
    font-size: var(--f2);
  }
}

@media screen and (max-width: 480px) {
  .newsletter-section {
    padding: 3rem 0;
  }
  
  .newsletter-container {
    padding: 0 1rem;
  }
  
  .input-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .newsletter-button {
    border-radius: 12px;
    width: 100%;
  }
  
  .newsletter-title {
    font-size: var(--f3);
    margin-bottom: 1rem;
  }
  
  .newsletter-description {
    font-size: var(--f1);
  }
}

/* Footer */
footer {
  background: linear-gradient(135deg, var(--cor-azul-escuro) 0%, var(--cor-azul) 100%);
  color: var(--cor-branco);
  padding: 4rem 0 1rem;
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 139, 65, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 139, 65, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;
}

.footer-section h2,
.footer-section h3 {
  font-family: var(--bold);
  margin-bottom: 1.5rem;
  font-size: var(--f3);
  color: var(--cor-branco);
}

.footer-section.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}

.footer-section.about .logo {
  margin-bottom: 2.2rem;
  display: block;
  align-items: flex-start;
  height: auto;
}

.footer-logo {
  height: 150px;
  width: auto;
  max-width: 320px;
  object-fit: contain;
  margin-bottom: 0;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.footer-section.about .logo h2 {
  font-size: var(--f4);
  color: var(--cor-laranja);
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 2rem;
  margin-top: 0;
  text-align: left;
  font-size: var(--f2);
  color: var(--cor-gelo);
  font-family: var(--regular);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--cor-branco);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: var(--cor-laranja);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 139, 65, 0.3);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: var(--cor-gelo);
  text-decoration: none;
  font-family: var(--regular);
  font-size: var(--f2);
  transition: all 0.3s ease;
  position: relative;
}

.footer-section ul li a:hover {
  color: var(--cor-laranja);
  padding-left: 0.5rem;
}

.footer-section ul li a::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: var(--cor-laranja);
  transition: width 0.3s ease;
}

.footer-section ul li a:hover::before {
  width: 0.3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--cor-gelo);
  font-family: var(--regular);
  font-size: var(--f2);
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: var(--cor-laranja);
  flex-shrink: 0;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright p,
.developed-by p {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-gelo);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-bottom-links a {
  color: var(--cor-gelo);
  text-decoration: none;
  font-family: var(--regular);
  font-size: var(--f1);
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--cor-laranja);
}

.separator {
  color: var(--cor-gelo);
  opacity: 0.5;
}

.developed-by .marca {
  color: var(--cor-laranja);
  font-family: var(--regular);
}

/* Responsivo */
@media screen and (max-width: 1140px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding: 3rem 0 1rem;
  }
  
  .footer-logo {
    height: 110px;
    max-width: 380px;
    margin: 0 auto;
    display: block;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-section.about {
    align-items: center;
  }
  
  .footer-section.about .description {
    text-align: center;
    max-width: 100%;
  }
  
  .footer-section h3 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .footer-section ul {
    text-align: center;
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 0.8rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-item {
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .copyright,
  .developed-by {
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  footer {
    padding: 2.5rem 0 1rem;
  }
  
  .footer-logo {
    height: 90px;
    max-width: 320px;
    margin: 0 auto;
    display: block;
  }
  
  .footer-content {
    gap: 2rem;
    text-align: center;
  }
  
  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-section.about {
    align-items: center;
  }
  
  .footer-section.about .description {
    text-align: center;
    max-width: 100%;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .footer-section h3 {
    text-align: center;
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
  }
  
  .footer-section ul {
    text-align: center;
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 0.8rem;
  }
  
  .footer-section ul li a {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
    margin-top: 1.5rem;
    gap: 1rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-item {
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  
  .contact-icon {
    margin: 0 auto;
  }
  
  .contact-item span {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
  }
  
  .copyright,
  .developed-by {
    text-align: center;
  }
  
  .copyright p,
  .developed-by p {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .footer-bottom-links a {
    font-size: 0.85rem;
  }
}
</style>
