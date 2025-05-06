import { PageExhibitProps } from "../components";

export const codeData: PageExhibitProps = {

    pageTitle:'Code',
    data:[
        {
            title: 'Unshut Homepage',
            text:`The homepage for UNSHUT's Black Box product. This website was supposed to only be accessible when a user completed their digital onboarding which was two digital experiences. As such, the website is intentionally vague. The site was made with ReactJS and dynamically changes its content the longer a user is on the site.`,
            gifUrls:['/assets/videos/Unshut2.mp4'],
            gifLink:{dest:'/unshut-homepage',name: 'Go'}
        },
        {
            title: "Hackable File Server",
            text:`For Unshut's Black Box experience, I built an interactive terminal system where users, guided over Zoom, hack into a simulated server to uncover hidden documents—only to be counterhacked by an invading entity. Starting with a raw Google Drive of 80+ folders and a minimal script, I built a tool to convert .docx files to HTML and map the file structure for use in the simulation. I then designed a 1960s-inspired terminal UI, implemented input logic based on the narrative, and produced a concluding video. The prototype was approved without notes and handed directly to backend. Built with TypeScript, React, and Redux. This will not work in mobile and is designed to be used while in fullscreen.`,
            images:['/assets/images/code/fileserver.PNG'],
            link:{dest:'/unshut-file-server', name:'Go'}
        },
        {
            title: "SkinCult Regimen",
            text:"The first experience for Unshut's Black Box Product. A self care routine guided by voice over with complex css animations. The spoken lines are visualized by a chatbot who animates based on the realtime frequency of the voice line spoken. Made in 5 days with React, Redux, Typescript, and P5JS.",
            gifUrls:[
                '/assets/videos/2.mp4', 
                '/assets/videos/3.mp4', 
                 '/assets/videos/4.mp4', 
                 '/assets/videos/bs.mp4'
            ]
        },
        {
            title:'Face Maker',
            text:`For my final assignment when I was at the Flatiron School, we were tasked to create a full stack project of our choosing. I decided to create an art application which is controlled with a user's face for fun or those with disabilities. The website was made in three weeks and so it does not have a tutorial and so I recorded a video of myself using it. This was made with React, Ruby on Rails, and clmTrackr.`,
            urls:['https://player.vimeo.com/video/434496247']
        }
    ]
}