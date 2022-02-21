import React from "react";
import {useContext} from "react";
import {MapContext} from "./MapContext";
import allDistricts from "./data/all-districts";
import "./interactiveMap.css";

const DistrictsList = () => {
	const {state, dispatch} = useContext(MapContext);

	const handleAreaMouseOver = (mapId) => {
		const action = {
			type: "swap-area",
			payload: mapId,
		};
		dispatch(action);
	};

	return (
		<div className="flex flex-col flex-wrap columns">
			{allDistricts.map(({district, areas}) => (
				<>
					<p key={district} className="text-xs">
						{district}
					</p>
					<ul className="flex flex-col">
						{areas.map(({nr, id, name}) => (
							<li
								key={id}
								className={id === state ? "is-lit" : null}
								onMouseOver={() => handleAreaMouseOver(id)}
							>
								{`${nr}. ${name}`}
							</li>
						))}
					</ul>
				</>
			))}
		</div>
	);
};

export default DistrictsList;
