import {ReactComponent as HeaderStart} from '../assets/header_top.svg';
import {ReactComponent as HeaderEnd} from '../assets/header_bottom.svg';
import CharacterSpans from "./CharacterSpans";
import {useState, useEffect} from "react";

export const Header = (props: any) => {
    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey(key => key + 1);
    }, [props.text]);
    return(
        <div id="header">
            <HeaderStart />
                <h1 className="header">
                    <CharacterSpans key={key} input={props.text} />
                </h1>
            <HeaderEnd />
        </div>
    );
}