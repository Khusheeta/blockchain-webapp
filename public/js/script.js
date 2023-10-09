async function getBlockchain() {
    const response = await fetch("/blocks");
    const blockchain = await response.json();
    const blockchainList = document.getElementById("blockchain");
    blockchainList.innerHTML = "";
    blockchain.forEach(block => {
      const listItem = document.createElement("li");
      listItem.textContent = `Block ${block.index} - ${block.timestamp}: ${block.data}`;
      blockchainList.appendChild(listItem);
    });
  }
  
  async function mineBlock() {
    const data = document.getElementById("data").value;
    await fetch("/mine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    });
    getBlockchain();
  }
  
  getBlockchain();
  