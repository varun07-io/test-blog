import { useEffect, useState } from "react";
import { db } from "../config/Firebase";
import {getDocs,collection} from "firebase/firestore";

export default function Manage() {
 
    const [list, setList] = useState([])
    
    const [UdpateTitle, SetUpdateTitle] = useState("");
    const [UpdateImage, SetUpdateImage] = useState("");
    const [UpdateContent, SetUpdateContent] = useState("");
    const [Updatepostedby, SetUpdateIsPostedBy] = useState("");

    const blogsCollectionRef = collection(db, "Blogs")

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

  useEffect(() => {
    getBlogs();
  }, []);
 
 
    return (
    <div>
            <div>
        {list.map((list) => (
            <div key={list.id} >
                <h1>{list.Title}</h1>
                <img src={list.image}/>
                <p>{list.content}</p>
                <p>{list.Posted}</p>
                <p>{list.uploadTime}</p>
            </div>
         ))
         }
        </div>
    </div>
  )
}
