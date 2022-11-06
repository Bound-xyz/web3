// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract Bound is ERC721A, Ownable {
    // Mapping from token ID to locked status
    mapping(uint256 => bool) _locked;

    // Mapping from owner to token IDs 
    mapping(address => uint256[]) private _ownendNfts;

    modifier IsTransferAllowed(uint256 tokenId) {
        require(!_locked[tokenId]);
        _;
    }

    /// @notice Emitted when the locking status is changed to locked.
    /// @dev If a token is minted and the status is locked, this event should be emitted.
    /// @param tokenId The identifier for a token.
    event Locked(uint256 tokenId);

    /// @notice Emitted when the locking status is changed to unlocked.
    /// @notice currently SBT Contract does not emit Unlocked event
    /// @dev If a token is minted and the status is unlocked, this event should be emitted.
    /// @param tokenId The identifier for a token.
    event Unlocked(uint256 tokenId);

    /// @notice Returns the locking status of an Soulbound Token
    /// @dev SBTs assigned to zero address are considered invalid, and queries
    /// about them do throw.
    /// @param tokenId The identifier for an SBT.
    function locked(uint256 tokenId) external view returns (bool) {
        require(ownerOf(tokenId) != address(0));
        return _locked[tokenId];
    }


    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721A(_name, _symbol) {}

    function mintAndTransfer(
        address _to,
        string memory _externalURI
    ) public onlyOwner {
        require(_to != owner(), "_toAddresses must NOT be included OWNER.");

        // put the next token ID down in the variable before the bulk mint
        uint256 tokenId = _nextTokenId();
        _safeMint(owner(), 1);

        // add ownership
        _ownendNfts[_to].push(tokenId);
        // transfer to the specified address
        safeTransferFrom(owner(), _to, tokenId);

        // update the token URI
        _setTokenURI(
            tokenId, _externalURI
        );

        // lock the token
        _locked[tokenId] = true;
        emit Locked(tokenId);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override payable onlyOwner IsTransferAllowed(tokenId) {
        address _tokenOwner = ownerOf(tokenId);
        require(
            from == _tokenOwner,
            "The from-address is NOT the token ID's owner."
        );

        // Banned for transfering to OWNER,
        // because to make sure that the status of credential ID mappings will not be complicated.
        require(to != owner(), "The to-address must NOT be OWNER.");

        super.transferFrom(from, to, tokenId);
    }

    function updateNFT(
        uint256 tokenId,
        string memory _externalURI
    ) public onlyOwner {
        // update the tokenURI
        _setTokenURI(tokenId, _externalURI);
    }

    function transferOwnership(address newOwner) public override onlyOwner{
        // Banned for transfering ownership to a user who has this token already,
        // because to make sure that the status of credential ID mappings will not be complicated.
        require(balanceOf(newOwner) == 0, "newOwner's balance must be zero.");
        super.transferOwnership(newOwner);
    }

    function ownedNFTs(address owner) public view returns(uint256[] memory){
        return _ownendNfts[owner];
    }

    // To be soulbound NFT except owner operations.
    function _beforeTokenTransfers(
        address,
        address,
        uint256,
        uint256
    ) internal view override onlyOwner {}

    // =============================================================
    //   The followings are copied from ERC721URIStorage.sol
    // =============================================================

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId));
        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }

        return super.tokenURI(tokenId);
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        require(_exists(tokenId), "URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
}