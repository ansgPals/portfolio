// app/layout.tsx 또는 _app.tsx 혹은 개별 page.tsx에서 사용 가능
import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>문혜민 | FE 개발자</title>
      <meta
        name="description"
        content="React, Next.js 중심으로 웹 서비스를 개발하는 프론트엔드 개발자 문혜민의 포트폴리오입니다."
      />
      <meta
        name="keywords"
        content="문혜민, 프론트엔드, React, Next.js, 포트폴리오, 웹개발자"
      />
      <meta name="author" content="문혜민" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="문혜민 | 프론트엔드 개발자" />
      <meta
        property="og:description"
        content="프론트엔드 개발자 문혜민입니다."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-domain.com" />
      <meta
        property="og:image"
        content="https://your-domain.com/og-image.png"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
