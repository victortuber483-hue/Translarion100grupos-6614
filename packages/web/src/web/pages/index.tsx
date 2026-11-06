import { useRef } from "react";
import { BookOpen, Check, Globe2, Send, X } from "lucide-react";

function Index() {
  const paymentDialog = useRef<HTMLDialogElement>(null);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="/" className="brand" aria-label="Translation — início">
          <span className="brand-icon"><Send size={19} strokeWidth={1.8} /></span>
          <span>translation<span className="brand-dot">.</span></span>
        </a>
        <span className="header-label">CONEXÕES QUE ENSINAM</span>
      </header>

      <main className="main-content">
        <article className="product">
          <div className="hero-image">
            <img src="/images/translation.jpg" alt="Globo branco em forma de balão de conversa sobre fundo azul" fetchPriority="high" />
            <span className="image-label"><Globe2 size={13} /> APRENDA EM COMUNIDADE</span>
            <div className="hero-miniatures" aria-hidden="true">
              <span className="miniature miniature-green"><img src="/images/translation.jpg" alt="" /></span>
              <span className="miniature miniature-violet"><img src="/images/translation.jpg" alt="" /></span>
              <span className="miniature miniature-amber"><img src="/images/translation.jpg" alt="" /></span>
            </div>
          </div>
          <div className="product-content">
            <div className="eyebrow"><BookOpen size={14} /><span>EBOOK DIGITAL</span><span className="eyebrow-divider" /><span>EDUCAÇÃO & IDIOMAS</span></div>
            <h1>100 Grupos Translation <span className="title-status"><span>ativos</span><small className="status-message">você sabe o que te espera</small></span></h1>
            <p className="description">Links de grupos educativos de línguas no Telegram.<br className="desktop-break" /> Comunidades ativas há anos, reunidas em um só ebook.</p>
            <div className="product-details">
              <span><Check size={15} /> 100 grupos</span>
              <span><Check size={15} /> Links reunidos</span>
              <span><Check size={15} /> Formato digital</span>
            </div>
            <button className="buy-button" aria-label="Comprar acesso por R$ 5,00" onClick={() => paymentDialog.current?.showModal()}>
              <span className="button-price"><span className="price-currency">R$</span> <strong>5,00</strong></span>
            </button>
            <p className="purchase-note">Pagamento único. Sem assinatura.</p>
          </div>
        </article>
        <figure className="lost-access">
          <div className="lost-access-image">
            <img src="/images/grupo-indisponivel.jpg?v=2" alt="Captura do Telegram com o aviso: Este grupo não pode ser exibido porque violou os Termos de Uso do Telegram." width={828} height={913} loading="eager" />
          </div>
          <figcaption>
            <span>Cansou de perder os seus acessos?</span>
            <div className="closing-brand">
              <div className="closing-wordmark">translation<span className="brand-dot">.</span></div>
              <p>100 grupos. Novas conexões para aprender.</p>
            </div>
            <button className="buy-button closing-buy-button" aria-label="Comprar acesso por R$ 5,00" onClick={() => paymentDialog.current?.showModal()}>
              <span className="button-price"><span className="price-currency">R$</span> <strong>5,00</strong></span>
            </button>
            <p className="purchase-note">Pagamento único. Sem assinatura.</p>
          </figcaption>
        </figure>
        <footer className="site-footer"><span>Translation</span><span>Mais línguas. Mais conexões.</span></footer>
      </main>

      <dialog ref={paymentDialog} className="payment-dialog" onClick={(event) => { if (event.target === event.currentTarget) paymentDialog.current?.close(); }}>
        <button className="close-dialog" aria-label="Fechar" onClick={() => paymentDialog.current?.close()}><X size={20} /></button>
        <BookOpen size={26} className="dialog-icon" />
        <h2>Seu acesso por R$ 5,00</h2>
        <p>O pagamento ainda não está disponível. A compra e a entrega do ebook serão liberadas após a integração com o Mercado Pago.</p>
        <button className="dialog-confirm" onClick={() => paymentDialog.current?.close()}>Entendi</button>
      </dialog>
    </div>
  );
}

export default Index;
