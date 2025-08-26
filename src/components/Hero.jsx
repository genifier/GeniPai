import { useState } from "react";
import "./Hero.css";

function Card({ id, title, body, selected, onClick }) {
    return (
      <div
        onClick={() => onClick(id)}
        className="card"
        style={{
          cursor: "pointer",
          background: selected ? "#eef2ff" : "var(--card)",
        }}
      >
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }

  export default function Hero() {
    const [selected, setSelected] = useState(null);
  
    const cards = [
      { id: 1, title: "나의 건강에 대해", body: "복약·질환 데이터로 맞춤 제안을 드립니다." },
      { id: 2, title: "나의 음악 취향에 대해", body: "무슨 음악을 좋아하는지 알려드립니다." },
      { id: 3, title: "내 소비 습관에 대해", body: "돈이 어디로 사라졌는지 보여드립니다." },
    ];
  
    const handleCardClick = (id) => {
      // 같은 카드를 다시 누르면 그대로 유지, 다른 카드를 누르면 그 카드로 전환
      setSelected(id);
    };
  
    // 시나리오 렌더러 (이미지의 3가지 경우를 적용)
    const renderScenario = (id) => {
      if (id === 1) {
        // 건강 상담
        return (
          <>
            <div className="bubble">
              나 당뇨병이 있는데, 빅토자라는 약이 좋대. 내가 먹어도 될까? 효과 좋아?
            </div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              김재현님은 평소에 소화가 잘 안되는 증상을 많이 겪어서 <b>위장장애 부작용</b>을 느끼실 것으로 예상됩니다.
              게다가 빅토자는 <b>주사로 투여</b>해야 합니다. 🪡
            </div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              김재현님은 10개월 전 부정맥이 있었고, 체성분 데이터를 보면 비만도 있어서,{" "}
              <b>SGLT-2 억제제</b> 종류의 약을 먹는 게 더 나을 것 같습니다. 이 약들은 <b>경구제</b>라 먹기도 편합니다!💊
            </div>
            <div className="bubble bubble--ai">
              우리나라에서 구매 가능한 SGLT-2 억제제 상품의 종류는 다음과 같습니다.
              <ul style={{ margin: "8px 0 0 18px" }}>
                <li>디파글로포징뭐뭐</li>
                <li>어쩌고</li>
                <li>약3</li>
                <li>약4</li>
              </ul>
            </div>
            <div className="bubble bubble--ai">
              위 리스트 중 디파씨부랄이랑 약3은 저번에 가셨던 ‘남윤수의원’에서 처방 가능합니다.
            </div>
          </>
        );
      }
      if (id === 2) {
        // 음악 취향 분석
        return (
          <>
            <div className="bubble">내가 시험기간에 가장 많이 듣는 노래가 뭘까?</div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              카카오톡 대화를 바탕으로 추론해 보았을 때 김재현님의 시험기간은 <b>올해 6월</b>로 보입니다.
            </div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              김재현님이 6월 초(6월 1일~6월 13일) 사이에 가장 많이 들은 노래들을 Spotify에서 찾아봤습니다.
            </div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              김재현님의 가장 많이 들은 아티스트는
              <ul style={{ margin: "8px 0 0 18px" }}>
                <li>jisokuryClub (151분)</li>
                <li>dosii (120분)</li>
                <li>극동아시아타이거즈 (87분)</li>
              </ul>
              입니다.
            </div>
            <div className="bubble bubble--ai">
              또한, 가장 많이 들은 음악은
              <ul style={{ margin: "8px 0 0 18px" }}>
                <li>🥜 Peanut butter Sandwich - jisokuryClub (12회)</li>
                <li>🎧 side by side - jisokuryClub (8회)</li>
                <li>🎵 음유 호원 - 극동아시아타이거즈 (7회)</li>
              </ul>
              입니다.
            </div>
            <div className="bubble bubble--ai">
              인디 쪽이 확실히 취향인 것 같은데, <b>여울리</b> 아티스트를 더 추천해 드릴까요?
            </div>
          </>
        );
      }
      if (id === 3) {
        // 소비 습관
        return (
          <>
            <div className="bubble">나 별로 돈 안쓴 것 같은데.. 왜 이렇게 돈이 없지?</div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              네가 어제 롯데 유니폼을 샀잖아
            </div>
            <div className="bubble bubble--ai">
              <span className="check">✓</span>
              돈 없다고 해놓고 <b>유니폼</b>을 사면 어떡해
            </div>
            <div className="bubble bubble--ai">✓</div>
            <div className="bubble bubble--ai">✓</div>
          </>
        );
      }
      // 기본: 안내
      return <div className="bubble">카드를 클릭해 보세요!</div>;
    };
  
    return (
      <section className="hero">
        <div className="container grid">
          {/* Left */}
          <div>
            <h1 className="h1">
              <span className="accent">GeniPai</span>, 나보다 나를<br />
              잘 아는 AI의 시대
            </h1>
            <p className="lead">
              당신의 데이터로 더 똑똑한 개인화 인사이트를. 보안은 기본, 설명 가능한 리포트까지.
            </p>
  
            <h3 style={{ margin: "10px 0 10px" }}>GeniPai는 어떤 AI인가?</h3>
            <div className="cards">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  selected={selected === card.id}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
  
          {/* Right - phone mock */}
          <div className="phone phone--cut">
            <div className="phone__screen">
              {renderScenario(selected)}
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </section>
    );
}