import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrophyFill } from 'react-icons/bs';
import { BsMusicPlayerFill } from 'react-icons/bs';


function Side(){
    return (
        <aside id="side">
            <div className="side__logo">
                <Link to="/">Music play</Link>
            </div>
            <div className="side__profile">
               <div className="profile__img"></div>
                <Link to="/mypages">최가영</Link>
            </div>
            <div className="side__menu">
                <ul>
                    <li><Link to="/today"><i className="fas fa-headphones-alt"></i> 오늘의 음악</Link></li>
                    <li><Link to="/chart"><BsFillTrophyFill/> 뮤직 차트</Link></li>
                    <li><Link to="/hot"><i className="fa-solid fa-fire"></i> HOT 뮤직</Link></li>
                    <li><Link to="/new"><i className="fa-solid fa-music"></i> 최신 뮤직</Link></li>
                    <li><Link to="/month"><BsMusicPlayerFill/> 이달의 뮤직</Link></li>
                    <li><Link to="/mymusic"><i className="fa-solid fa-compact-disc"></i> 나의 앨범</Link></li>
                </ul>
            </div>
            <div className="side__playList">
                <ul>
                    <li><Link to="/playlist">플레이리스트1</Link> <i class="fa-solid fa-angle-right"></i></li>
                    <li><Link to="/playlist">플레이리스트2</Link> <i class="fa-solid fa-angle-right"></i></li>
                    <li><Link to="/playlist">플레이리스트3</Link> <i class="fa-solid fa-angle-right"></i></li>
                </ul>
            </div>
            <div className="side__service">
                <ul>
                    <li><Link to="/">서비스 소개</Link></li>
                    <li><Link to="/">사용 방법</Link></li>
                    <li><Link to="/">저작권 안내</Link></li>
                </ul>
            </div>
        </aside>
    )
}
export default Side;