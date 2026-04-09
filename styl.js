list.innerHTML += `
  <li>
    ${item.nama} (${item.ukuran}) - Rp ${item.harga}
    <button onclick="hapusItem(${index})">❌</button>
  </li>
`;
pesan += `- ${item.nama} (${item.ukuran}) (Rp ${item.harga})%0A`;