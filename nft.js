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

// Make minting NFTs user input
function promptUserForNFT() {
  const name = prompt('Enter NFT name:');
  const description = prompt('Enter NFT description:');
  const image = prompt('Enter NFT image URL:');
  mintNFT(name, description, image);
}

// Call your functions below this line
while (true) {
  console.log('1. Mint an NFT');
  console.log('2. List all NFTs');
  console.log('3. Get total supply');
  console.log('4. Exit');
  const choice = prompt('Choose an option:');
  switch (choice) {
    case '1':
      promptUserForNFT();
      break;
    case '2':
      listNFTs();
      break;
    case '3':
      console.log(`Total Supply: ${getTotalSupply()}`);
      break;
    case '4':
      return;
    default:
      console.log('Invalid option. Please try again.');
  }
}