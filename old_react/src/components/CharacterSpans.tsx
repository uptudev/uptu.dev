import React from "react";

type Props = {
    input: string;
}

const CharacterSpans: React.FC<Props> = ({ input }) => {
    const characters = input.split("");
    return (
        <>
            {characters.map((char, index) =>
                char === " " ? (
                    <React.Fragment key={index}>{char}</React.Fragment>
                ) : (
                    <span key={index} className="head-span">{char}</span>
                )
            )}
        </>
    );
}

export default CharacterSpans;