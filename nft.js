// 1. Create a variable to hold your NFT's
let nftCollection = []; // an array to store NFT objects

// 2. Create an object inside your mintNFT function that will hold the metadata for your NFTs
function mintNFT(name, description, image) {
  const nft = {
    name,
    description,
    image
  };
  nftCollection.push(nft); // store the NFT in the collection
}

// 3. Your listNFTs() function will print all of your NFTs metadata to the console
function listNFTs() {
  nftCollection.forEach((nft) => {
    console.log(`Name: ${nft.name}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Image: ${nft.image}`);
    console.log('---'); // separator between NFTs
  });
}

// 4. For good measure, getTotalSupply() should return the number of NFT's you have created
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line
mintNFT('NFT 1', 'This is NFT 1', 'https://example.com/nft1.png');
mintNFT('NFT 2', 'This is NFT 2', 'https://example.com/nft2.png');
mintNFT('NFT 3', 'This is NFT 3', 'https://example.com/nft3.png');

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);