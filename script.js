async function fetchPiPrice() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usdt");
        const data = await response.json();
        
        if (data["pi-network"] && data["pi-network"].usdt) {
            document.querySelector(".price").textContent = `1 Pi = ${data["pi-network"].usdt} USDT`;
        } else {
            document.querySelector(".price").textContent = "Price not available";
        }
    } catch (error) {
        document.querySelector(".price").textContent = "Error fetching price";
        console.error("Error fetching Pi price:", error);
    }
}

// Fetch price every 30 seconds
fetchPiPrice();
setInterval(fetchPiPrice, 30000);