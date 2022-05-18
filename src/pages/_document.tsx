import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CKMEDNWRH8" />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-CKMEDNWRH8');
              `
            }}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2867249,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `
            }}
          /> */}
          <script src="https://www.google-analytics.com/analytics.js" />
          {/* <script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-211674799-1', 'auto');
            ga('send', 'pageview');
            `
            }}
          /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=optional" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit&display=optional" rel="stylesheet" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Colecione e venda seus NFTs via PIX!" />
          <meta name="keywords" content="nft,nftClube,ethereum,web3" />
          <meta name="robots" content="index, follow" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="msapplication-TileColor" content="#5F18C9" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />

          <meta property="og:title" content="ClubeNFT" />
          <meta property="og:description" content="Colecione e venda seus NFTs via PIX!" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ClubeNFT" />
          <meta property="og:image" content="/img/logo.svg" />
          <meta property="og:image:secure_url" content="/img/logo.svg" />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://clubenft.com.br" />

          <meta name="twitter:card" content="app" />
          <meta name="twitter:title" content="ClubeNFT" />
          <meta property="twitter:description" content="Colecione e venda seus NFTs via PIX!" />
          <meta property="twitter:url" content="https://clubenft.com.br" />
          <meta property="twitter:image" content="/img/logotipo-white.webp" />
          <meta name="twitter:image:alt" content="ClubeNFT"></meta>

          <link rel="canonical" href="https://clubenft.com.br" />
          <link rel="icon" href="/img/favicon.png" type="image/png" />
          <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />

          <title>ClubeNFT</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
