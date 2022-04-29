import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Hot(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="hot__cont">
                    <div className="hot__inner">
                        여기는 hot 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Hot;