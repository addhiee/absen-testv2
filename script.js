document.getElementById("absenForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const uid = document.getElementById("uid").value;
    const nama = document.getElementById("nama").value;
    const keterangan = document.getElementById("keterangan").value;
    const statusEl = document.getElementById("status");
  
    fetch("https://absen-proxyv2.vercel.app/api/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, nama, keterangan }),
    })
      .then((res) => res.json())
      .then((data) => {
        statusEl.textContent = data.result === "success" ? "Absen berhasil!" : "Gagal absen.";
        statusEl.style.color = data.result === "success" ? "green" : "red";
        document.getElementById("absenForm").reset();
      })
      .catch(() => {
        statusEl.textContent = "Terjadi kesalahan saat mengirim.";
        statusEl.style.color = "red";
      });
  
    setTimeout(() => {
      statusEl.textContent = "";
    }, 5000);
  });
  