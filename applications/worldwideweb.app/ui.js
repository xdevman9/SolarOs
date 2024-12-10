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
	this.url = "https://solar.bomberfish.ca/applications/worldwideweb.app/startpage.html";

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

	this.mount = async () => {
		setTimeout(() => {
			window.open(scramjet.encodeUrl(this.url), "scramjet");
		}, 250);
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
        <button class="navbtn" on:click=${() => frame.reload()}>&#x21bb;</button>

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
