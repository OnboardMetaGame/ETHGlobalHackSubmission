The methods in the ABI (and contract) enable the UI to choose which user mints the NFT, though the individual user will not be aware that they are able to do this.

The UI will call the methods, namely:
  
   questbookMint
   badgeMint
   championMint
   thusly:
   [account address (msg.sender) or user, [token id 0 for questbook, 1 for badge and 2 for champion] and [1] for amount to mint
   functionName(accAddr, 0, 1)
   
   Any issues, please ask.
   
