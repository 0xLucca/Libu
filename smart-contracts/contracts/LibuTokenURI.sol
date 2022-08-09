// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/access/Ownable.sol";

contract LibuTokenURI is Ownable {
    string private name;
    string private description;
    string private imageURI;

    constructor(
        string _name,
        string _description,
        string _imageURI
    ) {
        name = _name;
        description = _description;
        imageURI = _imageURI;
    }

    function setName(string calldata _name) public onlyOwner {
        name = _name;
    }

    function setDescription(string calldata _description) public onlyOwner {
        description = _description;
    }

    function setImageURI(string calldata _imageURI) public onlyOwner{
        imageURI = _imageURI
    }

    //TODO
    function tokenURI( 
        address lockAddress,
        address operator,
        address owner,
        uint256 keyId,
        uint256 expirationTimestamp
    ) external view returns (string memory) {
        //return "ipfs://QmWiN4zs8xje2Kz1rvzSPuvuAPzXoXbGXbkrL9kYVx8trL";
        return "";
    }
}
