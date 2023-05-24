import styled from "styled-components";

export const StyledMainProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: 100vh;
    justify-content: center;
    
`

export const StyledDivStacks = styled.div`
    display: flex;
    @media (max-width: 1080px) {
            flex-direction: column;
        }
    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        
        ul {
            display: flex;
            width: 100%;
            max-width: 327px;
            flex-direction: column;
            background-color: #0A192F;
            box-shadow: 0px 0px 4px 0px #fff;
            
            padding: 20px;
            height: 280px;
            border-radius: 10px;
            gap: 10px;
            /* flex-wrap: wrap; */
            overflow: auto;

            ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

            li {
                display: flex;
                align-items: flex-start;
            }
        }
    }
`

export const StyledDivProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    /* width: 50%; */
    text-align: center;
    margin-top: 60px;

    img {
        width: 100%;
        height: 280px;
        border-radius: 10px;
    }

    div {
        display: flex;
        gap: 20px;

        a { 
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            svg {
                width: 48px;
                height: 48px;
            }
            color: white;
            text-decoration: none;
            
            &:visited {
                color: white;
            }

            &:hover {
                color: blue;
            }
        }
    }

`