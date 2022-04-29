import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Mypages(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="myPages__cont">
                    <div className="myPages__inner">
                        여기는 Mypages 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Mypages;