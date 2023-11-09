import React from 'react'
import { useEffect, useState } from "react";
import { db } from "../config/Firebase";
import {getDocs,collection,addDoc} from "firebase/firestore";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Cards() {
   
    
    
        const [list, setList] = useState([])
        const [title, setTitle] = useState("");
    
       const [image, setImage] = useState( );
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
      useEffect(()=>{
        getBlogs();
      },[])
    
      return (
        <>
      <Navbar />
       <Container style={{backgroundColor:"rgb(250, 247, 247)"}}>
            <div >
              <div className='blog-container'>
                {list.map((list) => (
                    <div key={list.id} className='blog-main'>
                      <div className='blog-content'>
                        <h1>{list.Title}</h1>
                        <p className='blog-desc'>{list.Description}</p>
                        <img src={list.image}/>
                        <p className='blog-cont'>{list.content}</p>
                      </div>   
                    </div>
                ))
                }
               </div>
            </div>
             
            </Container> 
          </>
      );
    }
    
   

