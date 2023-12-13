/* eslint-disable @next/next/google-font-display */

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=optional"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.inert"></script>
				</body>
			</Html>
		);
  }
}

export default MyDocument;
