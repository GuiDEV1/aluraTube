import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/componentes/CSSResset";
import Menu from "../src/componentes/Menu";
import { StyledTimeline } from "../src/componentes/Timeline";

function HomePage() {
   const estilosDaHomePage = { 
     // backgroundColor: "red" 
   };

   // console.log(config.playlist);

   return (
      <>
      <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
         <Menu />
         <Header />
         <Timeline playlists={config.playlists}>
            Conteudo
         </Timeline>
      </div>
   </>
   );
}

export default HomePage

// function Menu() {
//    return (
//       <div>
//          Menu
//       </div>
//    )
// }

const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;   
      border-radius: 50%;                                                                                                                         
    }
    .user-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  `;

function Header() {
   return (
      <StyledHeader>
         {/* <img src="banner"/> */}

         <section className="user-info">
            <img src={`https://github.com/${config.github}.png`} />

            <div>
               <h2>
                  {config.name}
               </h2>

               <p>
                  {config.job}
               </p>
            </div>
         </section>
      </StyledHeader>
   )
}

function Timeline(propriedades) {
   // console.log("Dentro do componente", propriedades.playlists);
   const playlistNames = Object.keys(propriedades.playlists);
   // Statement
   // Retorno por expressão
   return (
       <StyledTimeline >
           {playlistNames.map((playlistName) => {
               const videos = propriedades.playlists[playlistName];
               console.log(playlistName);
               console.log(videos);
               return (
                   <section>
                       <h2>{playlistName}</h2>
                       <div>
                           {videos.map((video) => {
                               return (
                                   <a href={video.url}>
                                       <img src={video.thumb} />
                                       <span>
                                           {video.title}
                                       </span>
                                   </a>
                               )
                           })}
                       </div>
                   </section>
               )
           })}
      </StyledTimeline>  
   )
}