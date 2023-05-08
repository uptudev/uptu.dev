import "../stylesheets/pages/music.scss"

const Music = () => {
    return(
        <>
            <hr className="hr"/>
            <h2 className="music-title">My Tracks</h2>
            <hr className="hr"/>
            <ul className="p language-grid">
                <li className="biglist song-list-header">
                    <p className="single_line song-list-content">
                        <strong><a href="https://soundcloud.com/uptu/moth?si=a81b92a612cd41c1896451d92a06e160&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">Moth</a></strong>
                        <br/>
                        More of an exercise in sound design than a <em>song</em> per se. Uses granular synthesis, vocoding, convolution, and pitch-based sample-and-holding to try to create a library of psychedelic sound effects, but ended up composing it more as a standalone track. If Aphex Twin on DMT sounds like a good idea, give this a listen.
                    </p>
                </li>
                <li className="biglist song-list-header">
                    <p className="single_line song-list-content">
                        <strong><a href="https://soundcloud.com/uptu/opvs/s-nKODx?si=8ca1a917729d45ef924e2c704adebf4b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">Opvs</a></strong>
                        <br/>
                        I never ended up releasing this halftime DnB track back when I first finished it back in the late 2010s, as it never quite felt 'done' to me. Now it still remains as my most polished-sounding track.
                    </p>
                </li>
                <li className="biglist song-list-header">
                    <p className="single_line song-list-content">
                        <strong><a href="https://soundcloud.com/uptu/psytrance-wip/s-ytFqkzaoKFv?in=uptu/sets/alterplace/s-bJ6UrHN5h9N&si=06c95ba24cb94c2383726d59608824d0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">Psytrance WIP [NAME TBD]</a></strong>
                        <br/>
                        Just a nice straightforward psytrance track project sitting somewhere around 50% completion. Needs some more glitching to get more in my style, but is has a nice foundation behind it right now.
                    </p>
                </li>
            </ul>
        </>
    );
}

export default Music;
