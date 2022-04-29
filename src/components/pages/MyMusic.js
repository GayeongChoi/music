import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function MyMuisc(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="myMuisc__cont">
                    <div className="myMuisc__inner">
                        여기는 MyMuisc 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default MyMuisc;

