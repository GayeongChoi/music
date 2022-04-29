import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Main(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="main__cont">
                    <div className="main__inner">
                        여기는 main 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Main;