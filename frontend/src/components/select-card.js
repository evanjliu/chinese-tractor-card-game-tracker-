import { GiCardAceClubs, GiCardAceDiamonds, GiCardAceHearts, GiCardAceSpades, GiCard2Clubs, GiCard2Diamonds, GiCard2Spades, GiCard2Hearts, GiCard3Clubs, GiCard3Spades, GiCard3Hearts, GiCard3Diamonds } from "react-icons/gi";
import { GiCard4Clubs, GiCard4Hearts, GiCard4Spades, GiCard4Diamonds, GiCard5Clubs, GiCard5Diamonds, GiCard5Hearts, GiCard5Spades, GiCard6Clubs, GiCard6Diamonds, GiCard6Hearts, GiCard6Spades } from "react-icons/gi";
import { GiCard7Clubs, GiCard7Diamonds, GiCard7Hearts, GiCard7Spades, GiCard8Clubs, GiCard8Diamonds, GiCard8Hearts, GiCard8Spades, GiCard9Clubs, GiCard9Diamonds, GiCard9Hearts, GiCard9Spades } from "react-icons/gi";
import { GiCard10Clubs, GiCard10Diamonds, GiCard10Hearts, GiCard10Spades, GiCardJackClubs, GiCardJackDiamonds, GiCardJackHearts, GiCardJackSpades, GiCardQueenClubs, GiCardQueenDiamonds, GiCardQueenHearts, GiCardQueenSpades } from "react-icons/gi";
import { GiCardKingClubs, GiCardKingDiamonds, GiCardKingHearts, GiCardKingSpades, GiCardExchange, GiCardPick, GiCardJoker } from "react-icons/gi";
import { HiMiniPlusSmall, HiMiniMinusSmall } from "react-icons/hi2";
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const selectCard = () => {
    return(
        <>
        <GiCard10Clubs></GiCard10Clubs>
        </>
    )
};

export default selectCard