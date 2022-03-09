import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([])


  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://ajdev-blog.herokuapp.com/api/category")
      setCats(res.data)
    }
    getCats()

  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn3.vectorstock.com/i/thumb-large/18/52/programmer-coder-web-developer-or-software-vector-22631852.jpg" alt="" />
        <p>i am software developer i love to do coding and create new stuff happy learning !!!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories you can find !!!</span>
        <ul className="sidebarList">

          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">Follow US</span>
          <div className="sidebarSocial">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"> <i className=" sidebarIcon fab fa-facebook-square"></i></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">    <i className=" sidebarIcon fab fa-twitter-square"></i></a>
            <a target="_blank" rel="noreferrer" href="https://in.pinterest.com/">   <i className=" sidebarIcon fab fa-pinterest-square"></i></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">   <i className=" sidebarIcon fab fa-instagram-square"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
