import {listCategories, listStory} from "../data/Footer";

export const Footer = () => {
    return (
      <footer>
        <div className="bottom-nav">
          <div className="container">
            <ul>
              <li className="list-title">Categories</li>  
              {listCategories.map((curCateogry, index) => <li key={index}>{curCateogry.title}</li>)}
            </ul>
            <ul>
              <li className="list-title">About us</li>  
              {listStory.map((curStory, index) => <li key={index}>{curStory.title}</li>)}
            </ul>
            <ul>
              <li className="list-title">Social Media</li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
            <ul>
              <li className="list-title">Customer Service</li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Technical problems</a>
              </li>
              <li>
                <a href="#">donate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-txt">2022 &copy; All Rights Reserved</div>
      </footer>
    );
  };
  