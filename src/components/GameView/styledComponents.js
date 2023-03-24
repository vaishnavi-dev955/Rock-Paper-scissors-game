import style from 'styled-components'

export const MainContainer = style.div`
  background-color:#223a5f;
  width:100vw;
  height: 100vh;
  padding:40px;
`

export const ScoreContainer = style.div`
background-color:#223a5f;
  width:60vw;
  height:23vh;
  display: flex;
  align-items:space-around;
  justify-content:space-around;
  border:2px #ffffff solid;
  border-radius:10px;
  margin-left:200px;
  padding:10px;

`

export const SubScoreContainer = style.div`
 background-color:#ffffff;
  width:130px;
  height:130px;
  display: flex;
  flex-direction:column;
  border:0px solid;
  border-radius:10px;
  margin:10px;
  text-align:center;
`

export const ScorePara = style.p`
  color:#223a5f;
  font-size:20px;
  font-family: 'Bree Serif';
`

export const ScoreElement = style.p`
  color:#223a5f;
  font-size:25px;
  font-family: 'font-family';
`
export const ButtonsContainer = style.div`
   width:700px;
  height:400px;
  background-color:#223a5f;
   text-align:center;
   margin:30px;
   margin-left:330px;
`

export const MainButtonsContainer = style.div` 
display:flex;
justify-content:center;
align-items:center;
`

export const RockButton = style.button`
height:130px;
width:130px;
border-radius:50%;
background-color:#223a5f;
border:0px solid;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ScissorsButton = style.button`
height:130px;
width:130px;
border-radius:50%;
background-color:#223a5f;
border:0px solid;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:90px;
`
export const PaperButton = style.button`
height:130px;
width:130px;
border-radius:50%;
background-color:#223a5f;
border: 0px solid;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:60px;
`

export const Heading = style.h1`
 color:#ffffff;
  font-size:25px;
  font-family: 'Bree Serif';
  padding-left: 5px;
`
export const HeadingContainer1 = style.div`
  display: flex;
  flex-direction: column;
  list-style-type:none;
`
