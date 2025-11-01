// Store the paragraphs in a JavaScript object
const paragraphs = {
  dzoom: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@157.230.39.122:443?security=tls&encryption=none&headerType=none&type=tcp&sni=aka.ms#SL%20Cyber%20Vpn-test",
  azoom: "vless://692de61b-1a84-4313-ac55-26c620dcf5a9@support.zoom.us:80?path=%2F&security=none&encryption=none&host=comeback.slcybervpn.store&type=ws#SL%20Cyber%20Vpn-test2",
  hzoom: "vless://692de61b-1a84-4313-ac55-26c620dcf5a9@104.16.252.55:80?path=%2F&security=none&encryption=none&host=comeback.slcybervpn.store&type=ws#SL%20Cyber%20Vpn-test2",
  sltzoom: "vmess://eyJhZGQiOiIxNDEuMTkzLjIxMy4yMCIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0IjoiY29tZWJhY2suc2xjeWJlcnZwbi5zdG9yZSIsImlkIjoiYThlMzFhM2EtZWE3Ni00YzI0LWFjMTctZDE1YjQ0OTNkZjI2IiwibmV0Ijoid3MiLCJwYXRoIjoiLyIsInBvcnQiOiI4NDQzIiwicHMiOiJTTCBDeWJlciBWcG4tdGVzdDMiLCJzY3kiOiJhdXRvIiwic25pIjoiY29tZWJhY2suc2xjeWJlcnZwbi5zdG9yZSIsInRscyI6InRscyIsInR5cGUiOiItLS0iLCJ2IjoiMiJ9",
  slt4g: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=http%3A%2F%2Fzoom.us#SL%20Cyber%20Vpn-test",
  fiber: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=zoom.us#SL%20Cyber%20Vpn-test",
  asocial: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&alpn=http%2F1.1&encryption=none&headerType=none&type=tcp&sni=www.googleapis.cn#SL%20Cyber%20Vpn-test",
  d348: "d348",
  hyt: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=http%3A%2F%2Fyoutube.com#SL%20Cyber%20Vpn-test",
  //A498 //
  hwsp: "vmess://eyJhZGQiOiIxMDQuMTYuMjUyLjU1IiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJjb21lYmFjay5zbGN5YmVydnBuLnN0b3JlIiwiaWQiOiJhOGUzMWEzYS1lYTc2LTRjMjQtYWMxNy1kMTViNDQ5M2RmMjYiLCJuZXQiOiJ3cyIsInBhdGgiOiIvIiwicG9ydCI6Ijg0NDMiLCJwcyI6IlNMIEN5YmVyIFZwbi10ZXN0MyIsInNjeSI6ImF1dG8iLCJzbmkiOiJjb21lYmFjay5zbGN5YmVydnBuLnN0b3JlIiwidGxzIjoidGxzIiwidHlwZSI6Ii0tLSIsInYiOiIyIn0=",
  hgaming: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&alpn=http%2F1.1&encryption=none&headerType=none&type=tcp&sni=http%3A%2F%2Fsecure.vimeo.com#SL%20Cyber%20Vpn-test",
  hsocial: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=twitter.com.com#SL%20Cyber%20Vpn-test",
  tiktok: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=www.tiktok.com#SL%20Cyber%20Vpn-test",
  netflix: "vless://f5a010ad-7e29-4369-8dfa-d62d677ca368@comeback.slcybervpn.store:443?security=tls&encryption=none&headerType=none&type=tcp&sni=www.netflix.com#SL%20Cyber%20Vpn-test",
};

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => showMessage('Text copied to clipboard!'))
    .catch(err => showMessage('Failed to copy text: ' + err));
}

// Function to download files from config folder
function downloadConfigFile(filename) {
  // Path to your config folder
  const filePath = `https://fddsfdfdsf.netlify.app/config/${filename}`;
  
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showMessage(`Downloading ${filename}...`);
}

// Function to show a temporary message
function showMessage(msg) {
  let messageElement = document.getElementById('message');
  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.style.marginTop = '20px';
    messageElement.style.color = 'green';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.opacity = '0';
    messageElement.style.transition = 'opacity 0.5s';
    document.body.appendChild(messageElement);
  }

  messageElement.textContent = msg;
  messageElement.style.opacity = '1';
  
  setTimeout(() => {
    messageElement.style.opacity = '0';
  }, 2000);
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons
  const dzoom = document.getElementById('dzoom');
  if (dzoom) {
    dzoom.addEventListener('click', () => copyToClipboard(paragraphs.dzoom));
  }

  const azoom = document.getElementById('azoom');
  if (azoom) {
    azoom.addEventListener('click', () => copyToClipboard(paragraphs.azoom));
  }

  const hzoom = document.getElementById('hzoom');
  if (hzoom) {
    hzoom.addEventListener('click', () => copyToClipboard(paragraphs.hzoom));
  }

  const sltzoom = document.getElementById('sltzoom');
  if (sltzoom) {
    sltzoom.addEventListener('click', () => copyToClipboard(paragraphs.sltzoom));
  }

  const slt4g = document.getElementById('slt4g');
  if (slt4g) {
    slt4g.addEventListener('click', () => copyToClipboard(paragraphs.slt4g));
  }

  const fiber = document.getElementById('fiber');
  if (fiber) {
    fiber.addEventListener('click', () => copyToClipboard(paragraphs.fiber));
  }

  const asocial = document.getElementById('asocial');
  if (asocial) {
    asocial.addEventListener('click', () => copyToClipboard(paragraphs.asocial));
  }

  const d348 = document.getElementById('d348');
  if (d348) {
    d348.addEventListener('click', () => copyToClipboard(paragraphs.d348));
  }

  const hyt = document.getElementById('hyt');
  if (hyt) {
    hyt.addEventListener('click', () => copyToClipboard(paragraphs.hyt));
  }

  const hwsp = document.getElementById('hwsp');
  if (hwsp) {
    hwsp.addEventListener('click', () => copyToClipboard(paragraphs.hwsp));
  }

  const hgaming = document.getElementById('hgaming');
  if (hgaming) {
    hgaming.addEventListener('click', () => copyToClipboard(paragraphs.hgaming));
  }

  const hsocial = document.getElementById('hsocial');
  if (hsocial) {
    hsocial.addEventListener('click', () => copyToClipboard(paragraphs.hsocial));
  }

  const tiktok = document.getElementById('tiktok');
  if (tiktok) {
    tiktok.addEventListener('click', () => copyToClipboard(paragraphs.tiktok));
  }

  const netflix = document.getElementById('netflix');
  if (netflix) {
    netflix.addEventListener('click', () => copyToClipboard(paragraphs.netflix));
  }

  // Download buttons
  const dzoomssh = document.getElementById('dzoom-ssh');
  if (dzoomssh) {
    dzoomssh.addEventListener('click', () => downloadConfigFile('dzoom.ehi'));
  }
  
  const azoomssh = document.getElementById('azoom-ssh');
  if (azoomssh) {
    azoomssh.addEventListener('click', () => downloadConfigFile('azoom.ehi'));
  }
  
  const hzoomssh = document.getElementById('hzoom-ssh');
  if (hzoomssh) {
    hzoomssh.addEventListener('click', () => downloadConfigFile('hzoom.ehi'));
  }
  
  const sltzoomssh = document.getElementById('sltzoom-ssh');
  if (sltzoomssh) {
    sltzoomssh.addEventListener('click', () => downloadConfigFile('mzoom.ehi'));
  }
  
  const slt4gssh = document.getElementById('slt4g-ssh');
  if (slt4gssh) {
    slt4gssh.addEventListener('click', () => downloadConfigFile('slt4gzoom.ehi'));
  }
  
  const fiberssh = document.getElementById('fiber-ssh');
  if (fiberssh) {
    fiberssh.addEventListener('click', () => downloadConfigFile('fiberzoom.ehi'));
  }
  
  const asocialssh = document.getElementById('asocial-ssh');
  if (asocialssh) {
    asocialssh.addEventListener('click', () => downloadConfigFile('asocial.ehi'));
  }
  
  const d348ssh = document.getElementById('d348-ssh');
  if (d348ssh) {
    d348ssh.addEventListener('click', () => downloadConfigFile('dwhatsapp.ehi'));
  }
  
  const hytssh = document.getElementById('hyt-ssh');
  if (hytssh) {
    hytssh.addEventListener('click', () => downloadConfigFile('hyt.ehi'));
  }
  
  const hwspssh = document.getElementById('hwsp-ssh');
  if (hwspssh) {
    hwspssh.addEventListener('click', () => downloadConfigFile('a498.ehi'));
  }
  
  const hgamingssh = document.getElementById('hgaming-ssh');
  if (hgamingssh) {
    hgamingssh.addEventListener('click', () => downloadConfigFile('hgmaing.ehi'));
  }
  
  const hsocialssh = document.getElementById('hsocial-ssh');
  if (hsocialssh) {
    hsocialssh.addEventListener('click', () => downloadConfigFile('hsocial.ehi'));
  }
  
  const tiktokssh = document.getElementById('tiktok-ssh');
  if (tiktokssh) {
    tiktokssh.addEventListener('click', () => downloadConfigFile('tiktok.ehi'));
  }
  
  const netflixssh = document.getElementById('netflix-ssh');
  if (netflixssh) {
    netflixssh.addEventListener('click', () => downloadConfigFile('netflix.ehi'));
  }
});
