'use client';

import React, {useState, useEffect} from 'react';

type Props = {
  showAgreePopup: boolean;
  setShowAgreePopup: any;
  onAgreeComplete: any;
};

export default function ReservationAgreePopup({showAgreePopup, setShowAgreePopup, onAgreeComplete}: Props) {
  const [agreements, setAgreements] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
    agree4: false,
  });

  const allChecked = Object.values(agreements).every(Boolean);

  const handleChange = (key: keyof typeof agreements, checked: boolean) => {
    setAgreements(prev => ({...prev, [key]: checked}));
  };

  const handleAllCheck = (checked: boolean) => {
    setAgreements({
      agree1: checked,
      agree2: checked,
      agree3: checked,
      agree4: checked,
    });
  };

  return showAgreePopup && (
    <div className="reservation-agree-popup">
      <div className="form">
        <h2>객실예약 약관동의</h2>
        <div className="scroll">

          <h3>
            <label>
              <input
                type="checkbox"
                checked={agreements.agree1}
                onChange={(e) => handleChange('agree1', e.target.checked)}
              />
              이용시 유의사항에 동의
            </label>
          </h3>
          <p>
            보호자 동반없는 미성년자는 예약 및 입실 불가합니다.<br/>
            예약시 신청하신 인원이외에 추가인원은 입실이 거부될 수 있습니다.<br/>
            예약인원 초과로 인한 입실 거부시 환불도 되지 않으니 유의하시기 바랍니다.<br/>
            예약후 펜션이나 객실 변경은 해당예약 취소후 다시 예약하셔야 합니다.<br/>
            예약변경을 위한 취소시에도 취소수수료가 부과되오니 신중하게 예약하시기 바랍니다.<br/>
            <span className="main-color">애완견 동반시 입실이 불가능 합니다.</span><br/>
            냄새가 심한 요리는 다음손님을 위해 삼가해주시기 바랍니다.<br/>
            퇴실 시에는 내집같이 정돈을 부탁 드립니다.<br/>
          </p>

          <h3>
            <label>
              <input
                type="checkbox"
                checked={agreements.agree2}
                onChange={(e) => handleChange('agree2', e.target.checked)}
              />
              취소수수료(예약시점과 무관한 이용일 기준)에 동의
            </label>
          </h3>
          <p>
            예약취소는 전화 통화로만 가능합니다.<br/>
            취소수수료는 예약시점과는 무관한 이용시작일 기준입니다.<br/>
            환불시 결제하신 금액에서 취소수수료를 제외한 금액을 환불해 드립니다.<br/>
            취소수수료는 결제금액이 아닌 예약금(객실요금+기타옵션요금) 기준으로 책정됩니다.<br/>
            취소수수료가 100% 인 경우 전액 환불되지 않습니다.<br/>
            수수료 내역은 아래와 같습니다.<br/><br/>
          </p>
          <table>
            <tbody>
            <tr>
              <th>기준</th>
              <th>취소수수료(%)</th>
              <th>환불율(%)</th>
            </tr>
            <tr>
              <td>이용일 당일 취소시</td>
              <td>100%</td>
              <td>환불없음</td>
            </tr>
            <tr>
              <td>이용일 1일전 취소시</td>
              <td>90%</td>
              <td>10% 환불</td>
            </tr>
            <tr>
              <td>이용일 2일전 취소시</td>
              <td>90%</td>
              <td>20% 환불</td>
            </tr>
            <tr>
              <td>이용일 3일전 취소시</td>
              <td>90%</td>
              <td>30% 환불</td>
            </tr>
            <tr>
              <td>이용일 4일전 취소시</td>
              <td>90%</td>
              <td>40% 환불</td>
            </tr>
            <tr>
              <td>이용일 5일전 취소시</td>
              <td>90%</td>
              <td>50% 환불</td>
            </tr>
            <tr>
              <td>이용일 6일전 취소시</td>
              <td>90%</td>
              <td>60% 환불</td>
            </tr>
            <tr>
              <td>이용일 7일전 취소시</td>
              <td>90%</td>
              <td>70% 환불</td>
            </tr>
            <tr>
              <td>이용일 8일전 취소시</td>
              <td>90%</td>
              <td>80% 환불</td>
            </tr>
            <tr>
              <td>이용일 9일전 취소시</td>
              <td>90%</td>
              <td>90% 환불</td>
            </tr>
            <tr>
              <td>이용일 10일전 취소시</td>
              <td>90%</td>
              <td>0% 환불</td>
            </tr>
            <tr>
              <td>기본 취소 수수료</td>
              <td>0%</td>
              <td>100% 환불</td>
            </tr>
            </tbody>
          </table>

          <h3>
            <label>
              <input
                type="checkbox"
                checked={agreements.agree3}
                onChange={(e) => handleChange('agree3', e.target.checked)}
              />
              개인정보 수집 및 이용에 동의
            </label>
          </h3>
          <p>
            '끌로이스'는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.<br/>
            <br/>
            <strong>개인정보의 수집항목 및 이용목적</strong><br/>
            서비스 이용 과정에서 수집 및 이용되는 개인정보는 아래와 같습니다.<br/>
            <br/>
            <strong>수집∙이용목적</strong><br/>
            서비스 이용 및 계약의 이행, 본인 확인, 부정 이용 방지와 불만처리 등 민원처리<br/>
            <strong>수집∙이용항목</strong><br/>
            예약자(구매자) 이름, 휴대전화번호, 이메일<br/>
            <strong>보유 및 이용기간</strong><br/>
            이용목적 달성 후, 지체 없이 파기<br/>
            <br/>
            서비스 이용 및 계약의 이행, 부정 이용∙거래 방지 방문일시, 서비스 이용 기록, IP, 접속기록, 쿠키, 기기 정보<br/>
            주문 및 예약 상품 대금 결제, 현금영수증정보 결제정보(계좌, 신용카드, 휴대폰정보),<br/>
            결제 취소 금액 환불 은행명, 계좌번호, 예금주명<br/>
          </p>

          <h3>
            <label>
              <input
                type="checkbox"
                checked={agreements.agree4}
                onChange={(e) => handleChange('agree4', e.target.checked)}
              />
              이용자가 미성년자가 아니며 성인임에 동의
            </label>
          </h3>
        </div>

        <div className="all-agree-wrapper">
          <label>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={(e) => handleAllCheck(e.target.checked)}
            />
            전체 동의합니다.
          </label>
        </div>

        <div className="button-wrapper">
          <button type="button" className="send" onClick={() => {
            if (!allChecked) {
              alert('모든 약관에 동의하셔야합니다.');
              return;
            }
            onAgreeComplete();
          }}>동의
          </button>
          <button type="button" className="cancel" onClick={() => {
            setShowAgreePopup(false);
          }}>동의 안 함
          </button>
        </div>
      </div>
    </div>
  );
}
