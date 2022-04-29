import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Playbar from "../includes/Playbar";

function Chart(){
    return (
        <>
            <Side/>
            <Contents>
                <section className="chart__cont">
                    <div className="chart__inner">
                        여기는 chart 페이지 입니다
                    </div>
                </section>
            </Contents>
            <Playbar/>
        </>
    )
}
export default Chart;