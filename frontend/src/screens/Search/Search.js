import React from "react";
import Header from "components/layout/Header/Header";
/* import Body from "components/layout/Body/Body.js"; */
import {SearchStyled} from "./Search.style.js";
/* import Map from "components/composed/Map/Map"; 
import CardSearch from 'components/composed/CardSearch/CardSearch.js'; */

const Search = () => {
	return (
		<div>
			<Header />
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						<div className="search-results-list">
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
						</div>
					</div>
					<div className="search-map">
						<div className="map">xxxS</div>
					</div>
					<div className="search-more-button">
						<button type="button">cargar mas</button>
					</div>
				</div>
			</SearchStyled>
		</div>
	);
};

export default Search;
