
window.asset = window.asset || function (p) { var m = window.__ASSET_MAP || {}, id = m[p]; return (id && window.__resources && window.__resources[id]) || ('/' + p); };
const PDS = window.TheMuseShelfDesignSystem_f42d04;

function PageHead({ kicker, title, children }) {
  return (
    <header className="page-head">
      {kicker && <PDS.Label>{kicker}</PDS.Label>}
      <h1 className="tms-h1">{title}</h1>
      <PDS.Divider variant="oak" />
      {children}
    </header>
  );
}

function AboutScreen() {
  return (
    <main className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
      <PageHead kicker="About" title="Hello, and welcome to the shelf." />
      <div className="about">
        <div style={{ background: 'var(--white)', border: '1px solid var(--stone)', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={window.asset('assets/logo-stacked.png')} alt="The Muse Shelf logo" style={{ width: '88%' }} />
        </div>
        <div className="stack" style={{ gap: 18, fontSize: 16, lineHeight: 1.8 }}>
          <p>The Muse Shelf is a small, curated shopping blog for anyone who loves a calm, collected home and an easy beauty routine.</p>
          <p>I spend hours scrolling Amazon so you don't have to. I look for the pieces that read high-end: real texture, honest materials, quiet colors. Stone, ceramic, linen and warm wood. If it would look at home in a design shop, it makes the edit.</p>
          <p>Every post is one themed edit, matched to a pin, so you can save it, scan it and shop it in a few minutes.</p>
          <p className="tms-accent" style={{ fontSize: 20, marginTop: 6 }}>@themuseshelf</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <PDS.Button href="/">Browse the edits</PDS.Button>
            <PDS.Button variant="secondary" href="https://pinterest.com/themuseshelf" external>Follow on Pinterest</PDS.Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function DisclosureScreen() {
  return (
    <main className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
      <PageHead kicker="Legal" title="Affiliate Disclosure" />
      <div className="prose">
        <p>The Muse Shelf is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate I earn from qualifying purchases.</p>
        <p>When you click a product link on this site and make a purchase, I may earn a small commission at no extra cost to you. It helps keep The Muse Shelf running.</p>
        <p>The Muse Shelf may also join affiliate programs with other retailers in the future. Any post that contains affiliate links says so at the top.</p>
        <p>I only feature products I would genuinely put on my own shelf. Prices and availability change often, so always check the current price on the retailer's site before you buy.</p>
      </div>
    </main>
  );
}

function PrivacyScreen() {
  const S = ({ t, children }) => <><h2>{t}</h2>{children}</>;
  return (
    <main className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
      <PageHead kicker="Legal" title="Privacy Policy"><PDS.Label tone="muted">Last updated October 20, 2026</PDS.Label></PageHead>
      <div className="prose">
        <p>This policy explains what information The Muse Shelf (themuseshelf.com) collects when you visit, and how it is used.</p>
        <S t="Information we collect"><p>If you subscribe to the newsletter or use the contact form, we collect the details you share, such as your name and email address. We also collect anonymous usage data automatically, described below.</p></S>
        <S t="Analytics"><p>We use analytics tools to understand how visitors use the site: pages viewed, time on page, device type and approximate location. This data is aggregated and does not identify you personally.</p></S>
        <S t="Cookies"><p>Cookies are small files stored on your device. We and our partners use them for analytics, to remember your preferences and to attribute affiliate purchases. You can block or delete cookies in your browser settings; some features may not work as intended.</p></S>
        <S t="Affiliate links"><p>This site contains affiliate links, including links to Amazon. When you click one, the retailer may set a cookie to credit the referral. Their use of your data is governed by their own privacy policy.</p></S>
        <S t="Newsletter"><p>If you sign up for the weekly edit, your email is stored with our email provider and used only to send the newsletter. Every email has an unsubscribe link.</p></S>
        <S t="Third-party services"><p>Embedded content and services such as Pinterest may collect data according to their own policies.</p></S>
        <S t="Your choices"><p>You can ask to see, correct or delete the personal information we hold about you at any time by emailing <a href={'mailto:' + TMS.SITE.email}>{TMS.SITE.email}</a>.</p></S>
        <S t="Changes"><p>We may update this policy from time to time. The date at the top shows the latest revision.</p></S>
      </div>
    </main>
  );
}

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <main className="wrap" style={{ paddingBottom: 'var(--section-gap)' }}>
      <PageHead kicker="Contact" title="Say hello">
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 460 }}>Questions, collaborations or a find you think belongs on the shelf. Write to <a href={'mailto:' + TMS.SITE.email}>{TMS.SITE.email}</a> or use the form.</p>
      </PageHead>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        {sent ? (
          <p className="tms-accent" style={{ fontSize: 22, textAlign: 'center', padding: '40px 0' }}>Thank you. I'll write back soon.</p>
        ) : (
          <form className="stack" style={{ gap: 20 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <PDS.Input label="Name" name="name" required />
            <PDS.Input label="Email" name="email" type="email" required />
            <PDS.Input label="Message" name="message" multiline rows={6} required />
            <PDS.Button type="submit" style={{ alignSelf: 'flex-start' }}>Send message</PDS.Button>
          </form>
        )}
      </div>
    </main>
  );
}

Object.assign(window, { AboutScreen, DisclosureScreen, PrivacyScreen, ContactScreen });

