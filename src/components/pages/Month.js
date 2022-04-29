import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Month(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="month__cont">
                    <div className="month__inner">
                        여기는 Month 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Month;