// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Onboardbadge is ERC1155, Ownable {

    // QUESTBOOK is the NFT id 0 token in this contract
    // BADGE is the NFT id 1 token in this contract

    // NFT xter is different from the player
    // player has questbook, in non-transferable nft in their wallet
    // 1st task of connecting wallet unlocks the quest book
    // 2nd task will be to complete the quiz - Blockchain fundamentals
    // FE will send message to contract to mint badge NFT and add it to Questbook. 
    // UI will show quests/tasks completed and also badges
    // QB will have each task listed, but no badges shown until task has been completed...
    // 1 task in this hackathon... @Tanusree showed. Players will get the badge.

    // After completing Blockchan fundamentals quiz, player unlocks NFT xter
    // get badge and NFTxter - one of the PNGs (Unity-ui/level-1 -front.png and back level-1-back.png)

    uint256 public constant QUESTBOOK = 0;

    uint256 public constant BADGE = 1;

    uint256 public constant NFTXter = 2;

    uint public nftCount = 0;
    
    constructor() ERC1155("https://73ccxfsbao0t.usemoralis.com/{id}.json") {
        
        _mint(msg.sender, 0, 1, "{'Connected': 1}");
        _mint(msg.sender, 1, 1, "{'Badge': 'An In-Game Badge'}");
        _mint(msg.sender, 2, 1, "{'Wisdom': 1}");
                    
        nftCount++;
    }


    function mint(address account, uint256 id, uint256 amount) public onlyOwner {
        _mint(account, id, amount, "");
        nftCount++;

    }

    // acc addr, 0, 1 // 
    function questbookMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Connected': 1}");
        nftCount++;

    }

    // acc addr, 1, 1 // 
    function badgeMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Badge': 'An In-Game Badge'}");
        nftCount++;

    }

    // acc addr, 2, 1 // 
    function championMint(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _mint(account, id, amount, "{'Wisdom': 1}");
        nftCount++;

    }

    // acc addr, 1, 1
    function burn(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
        nftCount--;

    }

}