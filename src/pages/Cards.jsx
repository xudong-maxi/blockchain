import React, { Fragment } from "react";
import { Link, useParams, useLocation, Navigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Skeleton from "react-loading-skeleton";
import { Img } from "react-image";

import Button from "../components/Button";
import Icon from "../components/Icon";
import Loading from "../components/Loading";
import Title from "../components/Title";

import useCards from "../hooks/useCards";

const useStyles = createUseStyles({  // define style of list (display cards)
	ul: {
		display: "flex",
		alignItems: "center",
		flexFlow: "row wrap",
		justifyContent: "center",
		listStyleType: "none",
		maxWidth: "1400px",
		padding: 0,
		margin: "0 auto",
		"@media (max-width: 767px)": {
			"& a": {
				width: "50%",
			},
		},
	},
	li: {
		margin: "0.25rem",
		padding: "0.5rem",
		transition: "0.2s all",
		"&:hover": {
			transform: "scale(1.1)",
			cursor: "pointer",
		},
	},
	img: {
		width: "230px",
		"@media (max-width: 767px)": {
			width: "100%",
		},
	},
});

const Cards = () => {
	const { type } = useParams();
	const { pathname } = useLocation();
	const classes = useStyles();
	const {
		title: { bg, img },
		cards,
		isFinal,
		nextPage,
		moreLoading,
	} = useCards(type);


	if (!img) return <Navigate to="/blockchain/types" />;
	if (!cards.length) return <Loading color={bg} middle />;  // loading animation

	return (
		<Fragment>
			<Title
				title={`${type} type Pokémon`}
				// text="Select your favorite Pokémon..."
				color={bg}
			>
				<Icon bg={bg} size="medium" name={type} img={img} />
			</Title>

			<ul className={classes.ul}>
				{cards.map(({ id, name, imageUrl }) => (
					<Link to={`${pathname}/${id}`} key={id}>
						<li key={name} className={classes.li}>
							<Img
								src={imageUrl}
								loader={<Skeleton />}
								alt={name}
								className={classes.img}
							/>
						</li>
					</Link>
				))}
			</ul>

			{moreLoading && <Loading color={bg} />}
			{!moreLoading && !isFinal && (
				<Button color={bg} handleEvent={nextPage} text="Load more cards..." />
			)}
		</Fragment>
	);
};

export default Cards;
