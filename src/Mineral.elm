module Mineral exposing (..)

import Random


type alias Mineral =
    { name : String
    , colourInPPL : String
    , relief : Relief
    , colourInXPL : List ColourXPL
    , pleochroism : Pleochroism
    , cleavage : Cleavage
    , extinction : Extinction
    , features : String
    }


type Relief
    = LowRelief
    | ModerateRelief
    | HighRelief


type ColourXPL
    = FirstOrder
    | SecondOrder
    | ThirdOrder
    | Isotropic
    | ColourXPL String


type Pleochroism
    = NoPleochroism
    | WeakPleochroism
    | WeakToStrongPleochroism
    | StrongPleochroism


type Cleavage
    = NoCleavage
    | Indistinct
    | Perfect
    | Two String
    | Weak


type Extinction
    = Black
    | Undulose
    | Inclined String
    | Parallel
    | Oblique
    | Symmetrical


colourXPLToString : ColourXPL -> String
colourXPLToString colourXPL =
    case colourXPL of
        FirstOrder ->
            "1st Order"

        SecondOrder ->
            "2nd Order"

        ThirdOrder ->
            "3rd Order"

        Isotropic ->
            "Isotropic"

        ColourXPL detail ->
            detail


cleavageToString : Cleavage -> String
cleavageToString cleavage =
    case cleavage of
        NoCleavage ->
            "No"

        Indistinct ->
            "Indistinct"

        Perfect ->
            "Perfect (Parallel to long axis)"

        Two detail ->
            "Two, " ++ detail

        Weak ->
            "Weak"


extinctionToString : Extinction -> String
extinctionToString extinction =
    case extinction of
        Black ->
            "Black"

        Undulose ->
            "Undulose (unit)"

        Inclined detail ->
            "Inclined, " ++ detail

        Parallel ->
            "Parallel (straight)"

        Oblique ->
            "Oblique"

        Symmetrical ->
            "Symmetrical to cleavage"


pleochroismToString : Pleochroism -> String
pleochroismToString pleochroism =
    case pleochroism of
        NoPleochroism ->
            "No"

        WeakPleochroism ->
            "Weak"

        WeakToStrongPleochroism ->
            "Weak to Strong"

        StrongPleochroism ->
            "Strong"


reliefToString : Relief -> String
reliefToString relief =
    case relief of
        LowRelief ->
            "Low"

        ModerateRelief ->
            "Moderate"

        HighRelief ->
            "High"


randomMineral : Random.Generator Mineral
randomMineral =
    Random.uniform amphibole [ biotite, calcite, garnet, muscovite, olivine, plagioclase, pyroxenes, quartz ]


minerals : List Mineral
minerals =
    [ amphibole, biotite ]


amphibole : Mineral
amphibole =
    { name = "Amphibole"
    , colourInPPL = "Pale green to brown"
    , relief = HighRelief
    , colourInXPL = [ SecondOrder, ColourXPL "Pink", ColourXPL "Orange", ColourXPL "Yellow" ]
    , pleochroism = StrongPleochroism
    , cleavage = Two "~120 degrees"
    , extinction = Inclined "12-34 degrees"
    , features = "High relief and 120 degree cleavages, 6-sided crystals"
    }


biotite : Mineral
biotite =
    { name = "Biotite"
    , colourInPPL = "Brown"
    , relief = ModerateRelief
    , colourInXPL = [ ThirdOrder ]
    , pleochroism = StrongPleochroism
    , cleavage = Perfect
    , extinction = Parallel
    , features = "Brown pleochroism, reaction haloes"
    }


calcite : Mineral
calcite =
    { name = "Calcite"
    , colourInPPL = "Colourless"
    , relief = LowRelief
    , colourInXPL = [ SecondOrder, ColourXPL "Pinks and bright colours" ]
    , pleochroism = NoPleochroism
    , cleavage = Indistinct
    , extinction = Symmetrical
    , features = "Low relief, fibrous/euhedral crystals, some show parallel twins"
    }


garnet : Mineral
garnet =
    { name = "Garnet"
    , colourInPPL = "Colourless to pink"
    , relief = HighRelief
    , colourInXPL = [ Isotropic ]
    , pleochroism = NoPleochroism
    , cleavage = NoCleavage
    , extinction = Black
    , features = "Black in XPL, fractured, occasional s-shaped inclusion trails"
    }


muscovite : Mineral
muscovite =
    { name = "Muscovite"
    , colourInPPL = "Colourless"
    , relief = LowRelief
    , colourInXPL = [ ThirdOrder ]
    , pleochroism = NoPleochroism
    , cleavage = Perfect
    , extinction = Parallel
    , features = "Colourless and straight extinction"
    }


olivine : Mineral
olivine =
    { name = "Olivine"
    , colourInPPL = "Colourless to pale green"
    , relief = HighRelief
    , colourInXPL = [ SecondOrder, ColourXPL "High 2nd order" ]
    , pleochroism = NoPleochroism
    , cleavage = Weak
    , extinction = Parallel
    , features = "High relief, straight exinction, alteration minerals in fractures."
    }


plagioclase : Mineral
plagioclase =
    { name = "Plagioclase Feldspar"
    , colourInPPL = "Colourless (may be weathered)"
    , relief = LowRelief
    , colourInXPL = [ FirstOrder, ColourXPL "Grey with twinning" ]
    , pleochroism = NoPleochroism
    , cleavage = Two "can be indistinct"
    , extinction = Oblique
    , features = "Stripey appearance due to twinning"
    }


pyroxenes : Mineral
pyroxenes =
    { name = "Pyroxenes"
    , colourInPPL = "Colourless to green"
    , relief = HighRelief
    , colourInXPL = [ SecondOrder, ThirdOrder ]
    , pleochroism = WeakToStrongPleochroism
    , cleavage = Two "at 90 degrees"
    , extinction = Inclined "20-30 degrees, occasional twins"
    , features = "High relief and 90 degree cleavages, 8-sided crystals"
    }


quartz : Mineral
quartz =
    { name = "Quartz"
    , colourInPPL = "Colourless"
    , relief = LowRelief
    , colourInXPL = [ FirstOrder, ColourXPL "Grey (can be yellow)" ]
    , pleochroism = NoPleochroism
    , cleavage = NoCleavage
    , extinction = Undulose
    , features = "Commonly has undulose extinction"
    }
