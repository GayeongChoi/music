import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Today(){
    return (
        <>
            <Side/>
            <Contents>
                 <section className="today__cont">
                    <div className="today__inner">
                        여기는 Today 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Today;