import Badge from "../assets/badge_ph.png";

const tempBadges = [
	{
		id: 0,
		name: "First Time",
		image: Badge,
		discription: "You have completed the first quest",
	},
	{
		id: 1,
		name: "Second Time",
		image: Badge,
		discription: "You have completed the second quest",
	},
	{
		id: 2,
		name: "Third Time",
		image: Badge,
		discription: "You have completed the third quest",
	},
];

const Questbook = () => {
	return (
		<div className="questbook-bg">
			<div className="questbook">
				{tempBadges.map(({ id, name, image, discription }) => {
					return (
						<div className="badge" key={id}>
							<img src={image} alt={name} />
							<div className="name">{name}</div>
							<div className="discription">{discription}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Questbook;
