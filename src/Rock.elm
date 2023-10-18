module Rock exposing (..)

import Mineral exposing (Mineral)


type alias Rock =
    { name : String
    , formation : Formation
    , minerals : List Mineral
    }


type Formation
    = Igneous
    | Metamorphic
    | Sedimentary
