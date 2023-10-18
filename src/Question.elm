module Question exposing (..)

import Element exposing (Element, centerX, column, el, fill, row, spacing, text, width)
import Element.Font as Font
import Mineral exposing (Mineral)
import Random
import Rock exposing (Rock)


type Question
    = Mineral MineralQuestion
    | Rock RockQuestion


type alias MineralQuestion =
    { mineral : Mineral, prop : MineralProp }


type alias RockQuestion =
    { rock : Rock, prop : RockProp }


type MineralProp
    = ColourPPL
    | ColourXPL
    | Cleavage
    | Extinction
    | Pleochroism
    | Relief


type RockProp
    = Formation


mineralPropToString : MineralProp -> String
mineralPropToString prop =
    case prop of
        ColourPPL ->
            "Colour in PPL"

        ColourXPL ->
            "Colour in XPL"

        Cleavage ->
            "Cleavage planes"

        Extinction ->
            "Extinction in XPL"

        Pleochroism ->
            "Pleochroism in PPL"

        Relief ->
            "Relief"


mineralProp : Mineral -> MineralProp -> String
mineralProp mineral prop =
    case prop of
        ColourPPL ->
            mineral.colourInPPL

        ColourXPL ->
            List.map Mineral.colourXPLToString mineral.colourInXPL |> String.join ", "

        Cleavage ->
            Mineral.cleavageToString mineral.cleavage

        Extinction ->
            Mineral.extinctionToString mineral.extinction

        Pleochroism ->
            Mineral.pleochroismToString mineral.pleochroism

        Relief ->
            Mineral.reliefToString mineral.relief


mineralQuestion : Mineral -> MineralProp -> Question
mineralQuestion mineral prop =
    Mineral (MineralQuestion mineral prop)


randomProp : Random.Generator MineralProp
randomProp =
    Random.uniform ColourPPL [ ColourXPL, Cleavage, Extinction, Pleochroism, Relief ]


viewQuestion : Question -> Element msg
viewQuestion question =
    case question of
        Mineral q ->
            viewMineralQuestion q

        Rock q ->
            viewRockQuestion q


viewAnswer : Question -> Element msg
viewAnswer question =
    case question of
        Mineral q ->
            viewMineralAnswer q

        Rock q ->
            viewRockQuestion q


viewMineralQuestion : MineralQuestion -> Element msg
viewMineralQuestion { mineral, prop } =
    column [ spacing 10, centerX ]
        [ el [ centerX ] <| text mineral.name
        , el [ centerX ] <| text <| mineralPropToString prop
        ]


viewMineralAnswer : MineralQuestion -> Element msg
viewMineralAnswer question =
    el [ centerX, Font.bold ] <| text (mineralProp question.mineral question.prop)


viewRockQuestion question =
    text "rock"
