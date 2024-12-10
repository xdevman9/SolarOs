document.addEventListener("libcurl_load", () => {
  libcurl.set_websocket(`wss://wisp.mercurywork.shop/`); // leeching off percury's wisp instance until i can get whisper working :nfr:
  console.log("libcurl.js ready!");
  document.getElementById("go").disabled = false;
});

function loadURL(url) {
  var iframe = document.getElementById("frame"),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
  try {
    libcurl
      .fetch(url, {
        _libcurl_verbose: 1,
      })
      .then((response) => {
        response.text().then((text) => {
          const blob = new Blob(["<base target='_blank'>", text], { type: 'text/html' });
          const blobUrl = URL.createObjectURL(blob);
          iframe.src = blobUrl;
        });
      });
  } catch (e) {
    console.error(e);
    alert("WorldWideWeb encountered an error resolving your request. " + e);
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  console.debug("[WWW] submitting");
  e.preventDefault();
  loadURL(document.getElementById("address").value);
});
