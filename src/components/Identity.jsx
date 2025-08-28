import React from 'react';
import './Identity.css';

export default function Identity() {
  return (
    <section className="identity">
      <div className="container">
        <div className="section-header">
          <h2>우리의 약속과 비전</h2>
          <p className="lead">
            GeniPai는 사용자의 데이터를 가장 안전하게 보호하며, 기술을 통해 이로운 가치를 만드는 것을 목표로 합니다.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h4>🔒 강력한 보안</h4>
            <p>
              최신 암호화 기술과 유저 데이터의 탈중앙화를 통해 민감한 정보를 그 누구도 들여다볼 수 없도록 설계했습니다.
            </p>
          </div>
          <div className="feature-item">
            <h4>💡 투명한 AI</h4>
            <p>
              AI가 내린 결론의 근거를 사용자가 이해할 수 있도록 설명 가능한 리포트를 제공하여 기술에 대한 신뢰를 구축합니다.
            </p>
          </div>
          <div className="feature-item">
            <h4>🤝 사용자 중심</h4>
            <p>
              모든 기술 개발의 중심에는 사용자가 있습니다. 데이터의 진정한 주인은 사용자 자신이라는 철학을 지킵니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}