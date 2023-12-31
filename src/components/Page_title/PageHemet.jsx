import {Helmet} from "react-helmet";



const PageHemet = ( {title}) => {
    

  return (
    <div>
       <Helmet>
         <meta charSet="utf-8" />
                <title>Soribidu | {title}</title>
                <link rel="shortcut icon" href="https://sorobindu.com/wp-content/uploads/2022/03/Shorobindu-favicon.png" type="image/x-icon" />
       </Helmet>
    </div>
  )
}

export default PageHemet
