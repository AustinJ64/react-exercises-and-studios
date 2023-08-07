export default function HobbyLinks() {
    let hobbyLinks = ["https://www.barnesandnoble.com/", "https://www.bookswagon.com/"];
 
    return(
       <div>
          <h3>My Hobbies</h3>
          <a href = {hobbyLinks[0]} target = "blank">Barnes and Noble</a> <br></br>
          <a href = {hobbyLinks[1]} target = "blank">Books Wagon</a>
       </div>
    );
 }