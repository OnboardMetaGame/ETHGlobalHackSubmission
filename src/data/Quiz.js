const BlockchainFundamentals = [
	{
		question: "What is a blockchain?",
		options: [
			"A distributed ledger of digital documents",
			"A Concrete block connected with steel chains",
			"A False idea",
		],
		answer: "A distributed ledger of digital documents",
	},
	{
		question: "What is Bitcoin?",
		options: [
			"A cryptocurrency",
			"A cryptocurrency exchange",
			"A cryptocurrency mining platform",
		],
		answer: "A cryptocurrency",
	},
	{
		question: "What is a cryptocurrency?",
		options: ["A digital currency", "A toy currency", "A currency of Krypton"],
		answer: "A digital currency",
	},
	{
		question: "What is a node in a blockchain?",
		options: ["Any computer in the network", "A server", "A super computer"],
		answer: "Any computer in the network",
	},
	{
		qustion: "Who is the founder of Bitcoin?",
		options: ["Satoshi Nakamoto", "Mark Zuckerberg", "Elon Musk"],
		answer: "Satoshi Nakamoto",
	},
];

export const Paths = [
	{
		id: 0,
		name: "Blockchain Fundamentals",
		description: "Learn about blockchain",
		quiz: BlockchainFundamentals,
		info: [
			{
				title: "What is a blockchain?",
				description:
					"Blockchain is an immutable, distributed, decentralized; peer-to-peer ledger replicated across multiple nodes connected in a network, making it possible to record data about any event or transaction as it happens.",
				links: [
					"https://medium.com/swlh/a-simple-guide-to-understanding-blockchain-8dd09356b153#:~:text=Blockchain%20is%20an%20immutable%2C%20distributed,assets%20using%20a%20secure%20algorithm.",
				],
			},
			{
				title: "What is Bitcoin?",
				description:
					"Bitcoin is the first decentralized electronic cash payment network that enables value to be transferred peer-to-peer. Unlike traditional payment networks, Bitcoin bypasses the need for a centralized body of control, such as a government or a central bank.",
				links: [
					"https://medium.com/swlh/what-is-bitcoin-ffab5e2e6a1c#:~:text=Bitcoin%20is%20the%20first%20decentralized%20electronic%20cash%20payment%20network%20that,government%20or%20a%20central%20bank.",
				],
			},
			{
				title: "What are nodes in a blockchain?",
				description: "Nodes are computers that can mine.",
				links: [
					"https://medium.com/coinmonks/blockchain-what-is-a-node-or-masternode-and-what-does-it-do-4d9a4200938f",
				],
			},
		],
	},
];
