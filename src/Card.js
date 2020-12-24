import React from 'react'
import Card1 from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'


function Card({title,url,score,selftext_html}) {
   var  decoded_selftextHtml=decodeHTML(selftext_html);

    return (
        <CardGroup>
        <Card1.Body>
        <div className="card-container">
         <Card1.Title> <h4>{title}</h4>  </Card1.Title> 
     <div dangerouslySetInnerHTML={{__html:`${decoded_selftextHtml}`}}></div>   
         <Card1.Link href="#"> <h5>{url} </h5></Card1.Link>  
       
            <h5>Score: {score} </h5>
        </div>
        </Card1.Body>
        </CardGroup>
      
    )
}
function decodeHTML(html){
   var divEle= document.createElement('textarea');
   divEle.innerHTML = html;
   return divEle.value;
}
export default Card
