

// Get input values
const recipientAddress = document.getElementById("recipient-address").value;
const numSols = document.getElementById("num-sols").value;

const { Connection, PublicKey } = solanaWeb3;
function submitForm() {
    const { Connection, PublicKey } = solanaWeb3;
    let solanaPublicKey = document.getElementById("recipient-address").value;
    let amount = document.getElementById("num-sols").value;
    const connection = new Connection("https://api.devnet.solana.com");
    let publicKeyObject = new PublicKey(solanaPublicKey);
    const fn = (async () => {
        let txhash = await connection.requestAirdrop(publicKeyObject, amount * 1e9);
        console.log(`txhash: ${txhash}`);
    })();
    const inputText = document.getElementById("recipient-address").value;
    document.getElementById("send").innerHTML = `${amount} SOL Successfully send to ${inputText}!!!`;
};
