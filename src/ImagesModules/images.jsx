import happy from "../Images/happy.jpg";
import newyearImage from '../Images/newyear.png';
import inn from "../Images/in.jpg";
import advance from "../Images/advance.png";


let imgs =[happy,newyearImage,inn,advance];

let res= imgs.map((v,i,)=>{

   

    return <img src={v} alt="" width={400} height={250}  />;

});

function Image(){

    const myStyle = {
        display: 'grid', 
       
        placeItems: 'center'
      };
    return( <div style={ myStyle}><><h1>ImagesModule</h1>
    {res}</></div>)
   
    
    
}
export default Image;