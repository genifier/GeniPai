import React, { useState } from 'react';
import './Registration.css';

export default function Registration() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    // 이메일 전송 로직 추가
    alert(`${email} 주소로 사전예약이 신청되었습니다!`);
    setEmail(''); // 입력 필드 초기화
  };

  return (
    <section className="prereg">
      <div className="container">
        <h2>새로운 소식을 가장 먼저 받아보세요</h2>
        <p className="lead">
          사전예약을 신청하고 GeniPai의 출시 소식을 가장 먼저 만나보세요.
        </p>
        <form className="prereg-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your-email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">사전예약 신청하기</button>
        </form>
      </div>
    </section>
  );
}