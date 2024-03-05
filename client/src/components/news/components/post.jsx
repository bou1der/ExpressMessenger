import React from "react";
// src
import AvatarPost from "../resource/Avatar_post.svg"
import ViewsPost from "../resource/Views_post.svg"
import LikePost from "../resource/likes_post.svg"
import CommentsPost from "../resource/comments_post.svg"
import SharePost from "../resource/share_post.svg"
import ImgPost from "../resource/Img_post1.png"
import ImgPost2 from "../resource/Img_post2.png"
// src
const Post = ({}) =>{
    return(
        <>
            <div className="isPost">
                    <span className="postInfo">
                        <div className="Post-Creater-Info">
                                <img src={AvatarPost} alt=""/>
                            <div>
                                <h4>Post_author</h4>
                                <p>post_date</p>
                            </div>
                        </div>
                        <span className="Post-Views-Subscribe">
                            <span><img src={ViewsPost} alt=""/><p>236</p></span>
                            <button>Subscribe</button>
                        </span>
                    </span>
                <p className="Post-Main-Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sagittis mi eros.
                    Maecenas gravida leo non nisi molestie lacinia.
                    Phasellus consectetur nunc ac arcu finibus rutrum. Nam turpis metus, placerat.
                </p>
                <div className="Post-Img-Container">
                    <img className={'First-Row-Images-Post'} src={ImgPost} alt=""/>
                    <img className={'First-Row-Images-Post'} src={ImgPost2} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost2} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost2} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost} alt=""/>
                    <img className={'Second-Row-Images-Post'} src={ImgPost2} alt=""/>

                </div>
                <div className="Post-Touch-Activity">
                        <span className="Post-Button-Activity">
                            <button><img src={LikePost} alt=""/>2280</button>
                            <button><img src={CommentsPost} alt=""/>421</button>
                        </span>
                    <button className="Post-Button-Share"><img src={SharePost} alt=""/></button>
                </div>
            </div>
        </>
    )
}
export default Post