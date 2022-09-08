import {useState} from "react";
import Select from "react-select";
import {inspect} from "util";

export default function Home() {

    // Sub-Section 열고 닫는것을 관리 (Toggle 기능)
    const [isOpen, setMenu] = useState(false); // subMenu, default false

    // subTitle 재클릭시 닫는 기능
    const [toggle, setToggle] = useState(0);

    // Sub-Section 개별 실행 state
    const [flagNumber, setFlagNumber] = useState("0");

    // Sub-Section 재클릭시 닫는 기능을 수행하는 Function
    const toggleMenu = (checked_id: any) => {
        if (toggle == checked_id) {
            setToggle(checked_id);
            setMenu(isOpen => !isOpen);
        } else {
            setMenu(() => false);
            console.log("checked_id : " + checked_id)
            setFlagNumber(checked_id);
            setToggle(checked_id);
            setMenu(isOpen => !isOpen); // on,off Boolean 개념
        }
    };


    // Sub-Section 강제로 숨기는 기능
    const hideMenu = () => {
        setMenu(() => false)
    }

    // LocalInfra -  cur_Universe - bySeries
    const bySeries = [
        {label: "인문계열", value: 1},
        {label: "사회계열", value: 2},
        {label: "교육계열", value: 3},
        {label: "공학계열", value: 4},
        {label: "자연계열", value: 5},
        {label: "의약계열", value: 6},
        {label: "예체능계열", value: 7},
    ];


    return (
        <div>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            <nav id="sidebar">

                <div className="sidebar-header">

                    <div className="middle-button">
                        <button className="top-button" style={{backgroundColor: "#00abff"}}>
                            +게시판
                        </button>
                        <button className="top-button" style={{backgroundColor: "#049b00"}}>
                            +구분선
                        </button>
                        <button className="top-button" style={{backgroundColor: "#bd0000"}}>
                            삭제
                        </button>
                    </div>
                    <a href="localhost:3000/#">
                        <h1>
                            Portal Board
                        </h1>
                    </a>
                </div>

                <ul className="list-unstyled">

                    <li>
                        <a href="#schoolSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle collapsed" onClick={() => hideMenu()}>
                            <span className="icon"><i className="fa-solid fa-list"></i></span>
                            Board_1
                        </a>

                        <ul className="collapse list-unstyled" id="schoolSubmenu">
                            <li><a href="#">sub1</a></li>
                            <li><a href="#">sub2</a></li>
                            <li><a href="#">sub3</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#localSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle collapsed" onClick={() => hideMenu()}>
                            <span className="icon"><i className="fa-solid fa-list"></i></span>
                            Board_2
                        </a>

                        <ul className="collapse list-unstyled" id="localSubmenu">
                            <li><a href="#">sub1</a></li>
                            <li><a href="#">sub2</a></li>
                            <li><a href="#">sub3</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#infraSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle collapsed" onClick={() => hideMenu()}>
                            <span className="icon"><i className="fa-solid fa-list"></i></span>
                            Board_3
                        </a>

                        <ul className="collapse list-unstyled" id="infraSubmenu">
                            <li><a href="#">학원교습소현황</a></li>
                            <li><a href="#">평생교육기관현황</a></li>
                            <li>
                                <a href="#" onClick={() => toggleMenu("1")}>
                                    대학현황
                                </a>
                                <div className={(flagNumber == "1" && isOpen) ? "show-menu" : "hide-menu"}>

                                    <h5>
                                        대학현황
                                    </h5>

                                    <ul>

                                        <li>
                                            영역 선택
                                            <div className="middle-button">
                                                <button className="doubleButton">
                                                    시군구별
                                                </button>
                                                <button className="doubleButton">
                                                    행정동별
                                                </button>
                                            </div>
                                        </li>

                                        <li>
                                            설립별
                                            <div className="middle-button">
                                                <button className="tripleButton">
                                                    국립
                                                </button>
                                                <button className="tripleButton">
                                                    공립
                                                </button>
                                                <button className="tripleButton">
                                                    사립
                                                </button>
                                            </div>
                                        </li>

                                        <li>
                                            주야별
                                            <div className="middle-button">
                                                <button className="doubleButton">
                                                    주간
                                                </button>
                                                <button className="doubleButton">
                                                    야간
                                                </button>
                                            </div>
                                        </li>

                                        <li>

                                            <Select className="dropdown_items"
                                                    isSearchable={false}
                                                    placeholder={"계열별"}
                                                    options={bySeries}
                                            />

                                        </li>

                                    </ul>

                                </div>
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleMenu("2")}>
                                    공공도서관현황
                                </a>
                                <div className={(flagNumber == "2" && isOpen) ? "show-menu" : "hide-menu"}>
                                    <h5>
                                        공공도서관현황
                                    </h5>

                                    {/*    next, input this    */}

                                </div>
                            </li>
                            <li><a href="#">지역아동센터현황</a></li>
                            <li><a href="#">체육시설현황</a></li>
                            <li><a href="#">향토문화유적현황</a></li>
                            <li><a href="#">문화시설현황</a></li>
                            <li><a href="#">학교폭력현황</a></li>
                            <li><a href="#">다문화학생현황</a></li>
                        </ul>
                    </li>

                    {/*<li>
                        <a href="#praticeMenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle collapsed" onClick={() => hideMenu()}>
                            <span className="icon"></span>ListMenu</a>

                        SpringBoot에서 넘어온 값을 React로 받은 부분
                        <ul className="collapse list-unstyled" id="praticeMenu">
                            {subTitle.map((item) =>
                                <li key={item.id}><a href="#">{item.subTitle}</a></li>
                            )}
                        </ul>

                    </li>*/}

                </ul>
            </nav>

            <div style={{paddingLeft:"400px", paddingTop:"50px", paddingRight:"70px"}} >
                <button style={{
                    backgroundColor:"white",
                    color: "black",
                    borderRadius:"10px",
                    fontSize:"22px"
                }}>
                    글쓰기
                </button>
                <hr/>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>test.No</td>
                        <td>testContent.....................</td>
                        <td>testName</td>
                        <td>testDate</td>
                        <td>testHits</td>
                    </tr>
                    <tr>
                        <td>test.No</td>
                        <td>testContent.....................</td>
                        <td>testName</td>
                        <td>testDate</td>
                        <td>testHits</td>
                    </tr>
                    <tr>
                        <td>test.No</td>
                        <td>testContent.....................</td>
                        <td>testName</td>
                        <td>testDate</td>
                        <td>testHits</td>
                    </tr>
                    </tbody>
                </table>
                <hr/>

            </div>

        </div>
    );
};