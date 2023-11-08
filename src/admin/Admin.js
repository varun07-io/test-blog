import { useState } from "react";
import { db } from "../config/Firebase";
import {getDocs,collection,addDoc} from "firebase/firestore";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";


function App() {
    const [list, setList] = useState([])
    const [title, setTitle] = useState("");

   const [image, setImage] = useState( );
   const [descript, setDescript] = useState("");
  const [content, setContent] = useState("");
  const [postedby, setIsPostedBy] = useState("");

 
  const [time, setTime] = useState();

  const blogsCollectionRef = collection(db, "Blogs");

  const getBlogs = async () => {
    try {
      
      const data = await getDocs(blogsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      setList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

 
  

  const onSubmitBlogs = async () => {
    try {
       await addDoc(blogsCollectionRef, {
        Title: title,
        Posted: postedby,
        Description : descript,
        content:content,
        image: image,
        uploadTime: time
        
      });
      getBlogs();
    } 
     catch (err) {
      console.error(err);
    }
  };

  return (
    <>
  <Navbar />
    <Container>
      <div className="blog-create">
        <h1>Create Blog</h1>
        <div className="input-fields">
            <input
              placeholder="blogTitle"
              onChange={(e) => setTitle(e.target.value)}
            />
          
          <input type="text" placeholder="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
            
            <input
              placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            />
            <input
              placeholder="postedby"
              onChange={(e) => setIsPostedBy(e.target.value)}
            />
            <input
              placeholder="time"
              type="Number"
              onChange={(e) => setTime(Number(e.target.value))}
            />
            
            <button onClick={onSubmitBlogs}> Submit Blog</button>
          </div>

          <div>
            {list.map((list) => (
                <div key={list.id} >
                    <h1>{list.Title}</h1>
                    <img src={list.image}/>
                    <p>{list.Description}</p>
                    <p>{list.content}</p>
                    <p>{list.Posted}</p>
                    <p>{list.uploadTime}</p>
                </div>
            ))
            }
           </div> 

        </div> 
        </Container> 
      </>
  );
}

export default App;