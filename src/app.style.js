import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
    width: 100%;
    overflow-x: hidden;
    .MuiModal-root.MuiDrawer-root {
        width: 100%;
        .MuiPaper-root.MuiDrawer-paper {
            width: 45%;
            align-items: center;
            .MuiBox-root {
             
               .MuiList-root {
                   list-style-type: none;
                   .MuiListItem-root {
                    letter-spacing: -0.015em;
                    color: #727272;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 18px;
                    a {
                        width: 100%;
                        text-decoration: none;
                        .MuiButtonBase-root.MuiButton-root {
                            font-size: 15px;
                            width: 95%;
                            border-radius: 6px;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 500;
                        }
                        .MuiButton-root.MuiButton-outlined {
                            border: 1px solid #E87615;
                            color: #E87615;
                            &:hover {
                                color: #ffffff;
                                background-color: #E87615;
                            }
                        }
                        .MuiButton-root.MuiButton-contained {
                            background-color: #E87615;
                            color: #FFFFFF;
                            &:hover {
                                background-color: #ffffff;
                                color: #E87615;
                                border: 1px solid #E87615;
                            }
                        }
                        
                    }
                   }
               }
            }
        }
        
    }
    }
}
`