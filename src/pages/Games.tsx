import React from "react";
import "../stylesheets/pages/games.scss";
import spoopy_thumb from "../assets/game_thumbs/spoopy.gif";
import grimwire_thumb from "../assets/game_thumbs/grimwire.gif";

const Games = () => {
    return (
        <div id="games_grid" className="games_grid">
            <div id="spoopy" className="box game">
                <div id="title_spoopy" className="game_title">
                    <h2 className="title-text">spoopy [WIP]</h2>
                </div>
                <img src={spoopy_thumb} alt="Spoopy"
                className="game_image"/>
                <p className="single_line">
                    A puzzle game where you play as a ghost trying to figure out how you died.
                </p>
            </div>
            <div id="grimwire" className="box game">
                <div id="title_grimwire" className="game_title">
                    <h2 className="title-text">grimwire [WIP]</h2>
                </div>
                <img src={grimwire_thumb} alt="Grimwire"
                className="game_image"/>
                <p className="single_line">
                    A puzzle adventure heavily based off of the game Noita, with the player utilizing particle physics and magic to solve puzzles and progress further.
                </p>
            </div>
        </div>
    );
  };
  
  export default Games;
  
