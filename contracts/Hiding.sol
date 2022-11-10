// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "../@openzeppelin/contracts/utils/Counters.sol";
import "../@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract Hiding is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    constructor() ERC721("Hiding", "RASH") {}
    
        function _baseURI() internal pure override returns (string memory){
            return "./metadata.js";
        }
        function mint(address to) public returns (uint256) {
            require(_tokenIdCounter.current() < 3);
            _tokenIdCounter.increment();
            _safeMint(to, _tokenIdCounter.current());
            return _tokenIdCounter.current();
        }
}


