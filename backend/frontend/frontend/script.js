document.getElementById("helloBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/hello");
    const data = await response.json();
    document.getElementById("response").innerText = data.message;
  } catch (err) {
    document.getElementById("response").innerText = "Serverga ulanishda muammo!";
  }
});

