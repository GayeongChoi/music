import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function PlayList(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="playList__cont">
                    <div className="playList__inner">
                        여기는 PlayList 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default PlayList;