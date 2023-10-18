module Main exposing (..)

import Browser
import Element exposing (Element, centerX, centerY, column, el, fill, height, layout, padding, rgb, row, spacing, text, width)
import Element.Background as Background
import Element.Font as Font
import Element.Input as Input
import Html exposing (Html)
import Mineral exposing (Mineral)
import Question exposing (Question)
import Random
import Random.Extra
import Rock exposing (Rock)


main =
    Browser.element { init = init, update = update, subscriptions = subscriptions, view = view }


type alias Model =
    { minerals : List ( String, Mineral )
    , rocks : List ( String, Rock )
    , status : Status
    , question : Maybe Question
    , incorrect : Int
    , correct : Int
    }


type Status
    = Ask
    | Answer


init : () -> ( Model, Cmd Msg )
init _ =
    ( { minerals = List.map (\m -> ( m.name, m )) Mineral.minerals
      , rocks = []
      , status = Ask
      , question = Nothing
      , incorrect = 0
      , correct = 0
      }
    , Cmd.none
    )


type Msg
    = Start
    | ShowAnswer
    | Incorrect
    | Correct
    | ShowQuestion ( Mineral.Mineral, Question.MineralProp )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Start ->
            ( model, generateQuestion )

        ShowAnswer ->
            ( { model | status = Answer }, Cmd.none )

        Incorrect ->
            ( { model | incorrect = model.incorrect + 1 }, generateQuestion )

        Correct ->
            ( { model | correct = model.correct + 1 }, generateQuestion )

        ShowQuestion ( mineral, prop ) ->
            ( { model
                | status = Ask
                , question = Just <| Question.mineralQuestion mineral prop
              }
            , Cmd.none
            )


generateQuestion : Cmd Msg
generateQuestion =
    Random.generate ShowQuestion (Random.pair Mineral.randomMineral Question.randomProp)


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


view : Model -> Html Msg
view { question, status, correct, incorrect } =
    layout [ width fill, height fill ] <|
        el [ centerX, centerY ] <|
            case question of
                Nothing ->
                    el [ centerX ] <| Input.button [ centerX, padding 10, Background.color (rgb 0.2 0.2 0.2), Font.color (rgb 1 1 1) ] { onPress = Just Start, label = text "Start" }

                Just q ->
                    column [ spacing 40, centerX ]
                        [ case status of
                            Ask ->
                                column [ spacing 40, centerX ]
                                    [ Question.viewQuestion q
                                    , el [ centerX ] <| text "?"
                                    , Input.button [ centerX, padding 10, Background.color (rgb 0.2 0.2 0.2), Font.color (rgb 1 1 1) ] { onPress = Just ShowAnswer, label = text "Show answer" }
                                    ]

                            Answer ->
                                column [ spacing 40, centerX ]
                                    [ Question.viewQuestion q
                                    , Question.viewAnswer q
                                    , row [ spacing 40, centerX ]
                                        [ Input.button [ centerX, padding 10, Background.color (rgb 0.8 0.2 0.2), Font.color (rgb 1 1 1) ] { onPress = Just Incorrect, label = text "Incorrect" }
                                        , Input.button [ centerX, padding 10, Background.color (rgb 0.2 0.8 0.2), Font.color (rgb 1 1 1) ] { onPress = Just Correct, label = text "Correct" }
                                        ]
                                    ]
                        , viewScore correct incorrect
                        ]


viewScore : Int -> Int -> Element msg
viewScore correct incorrect =
    let
        total =
            correct + incorrect

        percentage =
            if total > 0 then
                Just <| toFloat correct / toFloat total

            else
                Nothing

        red =
            case percentage of
                Just p ->
                    0.8 * (1 - p)

                Nothing ->
                    0

        green =
            case percentage of
                Just p ->
                    0.8 * p

                Nothing ->
                    0
    in
    el [ centerX, padding 10, Background.color (rgb red green 0), Font.color (rgb 1 1 1) ] <|
        text <|
            String.concat
                [ "Score: "
                , String.fromInt correct
                , "/"
                , String.fromInt total
                , " "
                , case percentage of
                    Just p ->
                        String.fromInt (round (p * 100)) ++ "%"

                    Nothing ->
                        ""
                ]
