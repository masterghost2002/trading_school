export default function EembedMap({link}){
    return(
        <iframe 
        title="location"
        src={link}
        style={{border: "0px", padding:"0px"}}
        width="100%"
        height="100%"
        loading="lazy" 
     >
        </iframe>
    )
}