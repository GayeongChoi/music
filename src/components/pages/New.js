import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function New(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="new__cont">
                    <div className="new__inner">
                        여기는 New 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default New;