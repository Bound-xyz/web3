// contracts/BadgeToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Context.sol";

import "@openzeppelin/contracts/access/Ownable.sol";




contract Bound is ERC721Base {
     struct Project {
        string userName;

        string rewards;

        string projectName;
        string experience;
        string projectPeriod;
        string skill;
    }

    string public baseURI;
    Project public project;

    constructor(Project memory _project, string memory _baseURI) ERC721Base("Bound", "BND"){
        project = _project;
        baseURI = _baseURI;
    }

}

// {"userName": "testname","rewards": "10eth", "projectName": "testproject", "experience": "testexperience", "projectPeriod": "10", "skill": "スキル"}