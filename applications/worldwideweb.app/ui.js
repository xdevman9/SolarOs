const scramjet = new ScramjetController({
	files: {
		wasm: "/scram/scram/scramjet.wasm.js",
		worker: "/scram/scram/scramjet.worker.js",
		client: "/scram/scram/scramjet.client.js",
		shared: "/scram/scram/scramjet.shared.js",
		sync: "/scram/scram/scramjet.sync.js",
	},
	defaultFlags: {
		serviceworkers: true,
	},
});

scramjet.init("/scram_sw.js");

const connection = new BareMux.BareMuxConnection("/scram/baremux/worker.js");

connection.setTransport("/scram/epoxy/index.mjs", [{ wisp: "wss://wisp.mercurywork.shop/" }]);

const startpage = `
<!DOCTYPE html>
<html>

<head>
	<title>SolarOS Startpage</title>
	<link rel="stylesheet" type="text/css" href="/css/solarbase.css" />
	<style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 100vh;
			padding: 0;
			margin: 0;
		}

		input {
			width: min(80%, 20rem);
			height: 2rem;
			font-size: 1.5rem;
		}

		img {
			filter: var(--filter-accent);
		}
	</style>
</head>

<body>
	<img src="./globe.desk.fill.svg" class="logo" />
	<h1>WorldWideWeb</h1>
	<input type="text" id="omni" placeholder="Search or enter an address" />

	<script>
		let url = "";
		document.getElementById("omni").addEventListener("keydown", function (e) {
			if (e.key === "Enter") {
				const url = this.value;
				const expr = /(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})/;
				if (url.startsWith("http://") || url.startsWith("https://") || expr.test(url)) {
					window.parent.postMessage({ url: url }, "*");
				} else {
					window.parent.postMessage({ url: "https://www.google.com/search?q=" + url }, "*");
				}
				
	

				// window.parent.postMessage({ url: this.value }, "*");
			}
		});
	</script>
</body>

</html>
`

function BrowserApp() {
	this.css = `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    padding-top: 0;
    box-sizing: border-box;

	margin: 0.2em;

    .version {
    }
    h1 {
      margin-bottom: 0;
    }

    iframe {
      background-color: transparent;
      border: none;
      border-radius: 0.3em;
      flex: 1;
      width: 100%;
    }

    .input_row > label {
      font-size: 0.7rem;
      color: gray;
    }

    p {
      margin: 0;
      margin-top: 0.2em;
    }

    .nav {
      padding-top: 0.3em;
      padding-bottom: 0.3em;
      gap: 0.3em;
	  display: flex;
    }

    spacer {
      margin-left: 10em;
    }

	input {
		flex: 1;
	}

	button.navbtn {
		all: unset;
		cursor: pointer;
		appearance: none;
		border: none;
		background-color: transparent;
		font-size: 1.05rem;
		color: var(--color-fg);
		fill: var(--color-fg);
		transition: color 0.2s, fill 0.2s, transform 0.2s;
		font-family: var(--font-display);
		text-align: center;

		width: .9rem;
		height: 100%;

		svg {
			width: 100%;
			height: 0.9rem;

		}

		&:hover {
			transition: color 0.2s, fill 0.2s, transform 0.2s;
			background-color: transparent;
			svg {
				fill: var(--color-accent);
			}
			color: var(--color-accent);
		}

		&:active {
			transform: scale(0.95);
		}
	}
  `;
	this.url = "";

	const frame = scramjet.createFrame();
	frame.frame.name = "scramjet";

	frame.addEventListener("urlchange", (e) => {
		if (!e.url) return;
		this.url = e.url;
		
	});
	frame.frame.addEventListener("load", () => {
		let url = frame.frame.contentWindow.location.href;
		if (!url) return;
		if (url === "about:blank") return;

		this.url = $scramjet.codec.decode(
			url.substring((location.href + "/scramjet").length)
		);
	});

	const handleSubmit = () => {
		this.url = this.url.trim();
		//  frame.go(this.url)
		if (!this.url.startsWith("http")) {
			this.url = "https://" + this.url;
		}

		return frame.go(this.url);
	};
	// this.githubURL = `https://github.com/MercuryWorkshop/scramjet/commit/${$scramjet.version.build}`;


	const openStartPage = () => {
		this.url = "";
		frame.frame.contentWindow.document.open();
		frame.frame.contentWindow.document.write("");
		frame.frame.contentWindow.document.write(startpage);
	}


	this.mount = async () => {
		setTimeout(() => {
			openStartPage();

			window.addEventListener("message", (e) => {
				if (e.data.url) {
					this.url = e.data.url;
					handleSubmit();
				}
			});
		}, 100);
	}

	return html`
      <div>
      <div class="nav">
        <button class="navbtn" on:click=${() => frame.back()}>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.7891 20.3555">
						<g>
						 <rect height="20.3555" opacity="0" width="14.7891" x="0" y="0"/>
						 <path d="M0 10.1719C0 10.4648 0.105469 10.7227 0.328125 10.9453L9.62109 20.0273C9.82031 20.2383 10.0781 20.3438 10.3828 20.3438C10.9922 20.3438 11.4609 19.8867 11.4609 19.2773C11.4609 18.9727 11.332 18.7148 11.1445 18.5156L2.61328 10.1719L11.1445 1.82812C11.332 1.62891 11.4609 1.35938 11.4609 1.06641C11.4609 0.457031 10.9922 0 10.3828 0C10.0781 0 9.82031 0.105469 9.62109 0.304688L0.328125 9.39844C0.105469 9.60938 0 9.87891 0 10.1719Z" />
						</g>
					   </svg>
		</button>
        <button class="navbtn" on:click=${() => frame.forward()}>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.1094 20.3555">
						<g>
						 <rect height="20.3555" opacity="0" width="14.1094" x="0" y="0"/>
						 <path d="M14.1094 10.1719C14.1094 9.87891 13.9922 9.60938 13.7695 9.39844L4.48828 0.304688C4.27734 0.105469 4.01953 0 3.71484 0C3.11719 0 2.64844 0.457031 2.64844 1.06641C2.64844 1.35938 2.76562 1.62891 2.95312 1.82812L11.4844 10.1719L2.95312 18.5156C2.76562 18.7148 2.64844 18.9727 2.64844 19.2773C2.64844 19.8867 3.11719 20.3438 3.71484 20.3438C4.01953 20.3438 4.27734 20.2383 4.48828 20.0273L13.7695 10.9453C13.9922 10.7227 14.1094 10.4648 14.1094 10.1719Z" />
						</g>
					   </svg>
		</button>
		<button class="navbtn" on:click=${() => openStartPage()}>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.2188 26.0469">
				<g>
					<rect height="26.0469" opacity="0" width="30.2188" x="0" y="0"/>
					<path d="M11.3438 24.5625L18.5 24.5625L18.5 16.7031C18.5 16.1094 18.125 15.7188 17.5156 15.7188L12.3281 15.7188C11.7344 15.7188 11.3438 16.1094 11.3438 16.7031ZM1.21875 13.4844C1.60938 13.4844 1.9375 13.2656 2.21875 13.0312L14.5156 2.70312C14.6406 2.59375 14.7969 2.54688 14.9219 2.54688C15.0469 2.54688 15.1875 2.59375 15.3125 2.70312L27.625 13.0312C27.9062 13.2656 28.2344 13.4844 28.625 13.4844C29.3906 13.4844 29.8438 12.9375 29.8438 12.3594C29.8438 12.0469 29.7031 11.7031 29.4062 11.4531L16.4844 0.609375C15.9844 0.203125 15.4531 0 14.9219 0C14.3906 0 13.8438 0.203125 13.3594 0.609375L0.4375 11.4531C0.140625 11.7031 0 12.0469 0 12.3594C0 12.9375 0.453125 13.4844 1.21875 13.4844ZM22.75 6.4375L26.125 9.28125L26.125 3.625C26.125 3.03125 25.7344 2.65625 25.1406 2.65625L23.7344 2.65625C23.1562 2.65625 22.75 3.03125 22.75 3.625ZM6.60938 26.0312L23.2188 26.0312C25.0469 26.0312 26.125 24.9844 26.125 23.2031L26.125 9.60938L23.8594 8.10938L23.8594 22.625C23.8594 23.3594 23.4531 23.7812 22.75 23.7812L7.09375 23.7812C6.39062 23.7812 5.96875 23.3594 5.96875 22.625L5.96875 8.10938L3.71875 9.60938L3.71875 23.2031C3.71875 24.9844 4.79688 26.0312 6.60938 26.0312Z" />
				</g>
			</svg>
		</button>
        <button class="navbtn" on:click=${() => frame.reload()}>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.1875 29.2344">
				<g>
					<rect height="29.2344" opacity="0" width="22.1875" x="0" y="0"/>
					<path d="M0 15.5469C0 21.5625 4.875 26.4531 10.9062 26.4531C16.9375 26.4531 21.8125 21.5625 21.8125 15.5469C21.8125 14.8438 21.3281 14.3594 20.6406 14.3594C19.9844 14.3594 19.5625 14.8438 19.5625 15.5312C19.5625 20.3125 15.6875 24.1719 10.9062 24.1719C6.125 24.1719 2.25 20.3125 2.25 15.5312C2.25 10.75 6.125 6.875 10.9062 6.875C11.7188 6.875 12.4531 6.90625 13.1094 7.04688L9.79688 10.2969C9.57812 10.5 9.48438 10.7969 9.48438 11.0781C9.48438 11.7188 9.96875 12.2031 10.5781 12.2031C10.9375 12.2031 11.1875 12.0781 11.3906 11.8906L16.3281 6.95312C16.5469 6.73438 16.6562 6.46875 16.6562 6.14062C16.6562 5.84375 16.5312 5.54688 16.3281 5.34375L11.3906 0.34375C11.2031 0.125 10.9219 0 10.5781 0C9.96875 0 9.48438 0.515625 9.48438 1.15625C9.48438 1.45312 9.59375 1.73438 9.78125 1.95312L12.6562 4.79688C12.0938 4.6875 11.5 4.64062 10.9062 4.64062C4.875 4.64062 0 9.51562 0 15.5469Z"/>
				</g>
			</svg>
		</button>

        <input type="text" bind:value=${use(this.url)} on:input=${(e) => {
			this.url = e.target.value;
		}} on:keyup=${(e) => e.keyCode == 13 && handleSubmit()}></input>

        <button on:click=${() => window.open(scramjet.encodeUrl(this.url), "scramjet")}>Go</button>
      </div>
	  <base target="_blank">
      ${frame.frame}
	  </base>
    </div>
    `;
}
window.addEventListener("load", async () => {
	document.body.appendChild(h(BrowserApp));
});
