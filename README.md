Full description:
DecisionChain enables anonymous, private and secure voting.
Vote counting, venue acquisition, large inefficiencies – many problems of traditional in-person voting makes it expensive and complicated, prone to many errors, human and random, that might break the whole election. However, moves to digital voting has been slow. While digitalization works around the logistical concerns, bigger problems surrounding privacy and security of votes arise. How safe is the vote casting process? How do we ensure anonymity of votes and secrecy of vote counts? 
DecisionChain solves these problems. As a voting platform deployed on the Klatyn blockchain, we employ cryptographic capabilities to make digital voting possible, ensuring each voter has a right to an anonymous vote that is safe from attack from external parties. At the same time, research has shown that participants are more active on an anonymous online platform than going through hassles of vote-casting in-person and are more likely to involve themselves in the democratic process.
Besides use in political elections, DecisionChain can be used for voting in any decision-making situation: committee members voting for the next company policy, a group of friends deciding where to go for lunch, and even as a platform for collating multiple-choice responses in quizzes.
Incoporate DecisionChain in your decision chain right now!

Technical explanation:
Built in Node.js with Klatyn’s native caver-js module, DecisionChain makes use of the unique features of the Klaytn blockchain. Each voter is a registered user on DecisionChain, each with their own private and public key. At the start of the voting process, votes are generated as tokens (according to the KIP7 standard) on the chain and distributed to each eligible voter identified by their public key and address. This makes use of Klaytn’s caver.kct.kip7.deploy() and caver.kct.kip7.transfer() function. These tokens have in-built smart contracts at initiation which prevents transfer of votes between voters, protecting the integrity and democracy of the voting process. 
Then, each voter votes for their desired candidate with just a click of a button. At this stage, a smart contract is set up for the transfer of the token to the candidate at a later time. This contract is cryptographically protected from third-party attacks attempting to inspect or modify the contract. 
When all votes are cast or the duration is up, votes will be counted and the winner is decided. Each user in the blockchain is here able to verify the validity and integrity of the voting process themselves, reducing the risk of rigging by a central authority.
The secure voting process is then complete and the anonymity of each voter is completely ensured.
![image](https://user-images.githubusercontent.com/96331879/192153237-3153fe40-3468-4212-81a5-3c654ddbe68e.png)
