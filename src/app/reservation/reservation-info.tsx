import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';

export default function ReservationInfo(): ReactElement {

  return (
    <div className="info-wrapper">
      <h3>객실이용시 확인사항</h3>
      <ul className="guide">
        <li>인원 추가시 1인(영유아포함) 3만원씩 추가요금이 발생됩니다.</li>
        <li>수영장 미온수 추가시 5만원/7만원 추가요금이 발생합니다.(입실당일 기준 32도 5만원/34도 7만원)</li>
        <li>추가요금은 현장에서 지불가능하오니 도착하셔서 결제 부탁드리겠습니다.</li>
        <li>입실시간: 오후3시 <span className="font1">퇴실시간: 오전 11시</span></li>
        <li>예약된 인원 외 다른사람의 방문을 제한합니다.</li>
        <li>입실이 불가능하며 당일 예약 취소와 동일시 되는 상황 : 예약된 인원 이상 왔을 때, 애완동물과 동반입실할 때</li>
        <li><span className="font1">객실 내에서 해산물 및 고기요리와 튀김류 조리는 다음손님을 위해 삼가해주시기 바랍니다.</span></li>
        <li>시설물 훼손 및 분실시 책임은 고객님께 부과하오니 객실사용에 신경써 주시기 바랍니다.</li>
        <li><span className="font1">부주의로 인해 일어난 안전사고, 귀중품(현금포함) 분실 및 파손에 대해서는 펜션에 책임을 물을 수 없습니다.</span></li>
        <li>입금하신 후 12시간 이내에 예약완료 문자를 전송해드립니다. 문자를 받지 못하셨을 경우, 반드시 펜션 측에 연락주시기 바랍니다.</li>
        <li>마지막 퇴실시에는 실내에 있는 쓰레기는 분리수거해 버려 주시고 사용하신 식기도 세척해 주시기 바랍니다.</li>
        <li>시설물을 이용하시며 개인 안전관리에 각별히 유념해 주시고 본인 부주의에 의한 안전사고는 본인이 책임지게 됩니다.</li>
      </ul>

      <h3>입금전 확인사항 </h3>

      <ul className="guide">
        <li>고객님의 사정에 의해 예약을 취소하시거나, 예약 날짜를 변경하실 경우 예약 취소에 해당되며, 아래와 같이 위약금이 적용되므로 신중히 고려하여 예약해주시기 바랍니다.</li>
        <li>천재지변으로 인한 당일 예약취소를 하실 경우에도 환불이 불가능합니다.</li>
        <li>당일 예약하시고 입금한 후 당일 취소하셔도 예약일 기준으로 아래 환불규정에 해당됩니다.</li>
        <li>예약 당일부터 24시까지는 1일 전이며, 그 이후부터 24시간 경과 시 1일씩 경과하는 것으로 계산합니다.</li>
        <li>아래 환불규정은 고객님과 펜션의 공정한 계약이므로 동의하신다면 진행하시기 바랍니다.</li>
        <li>환불은 입금자명으로 되며, 입금 시 송금수수료는 제외한 후 입금됩니다.</li>
      </ul>

      <h3>환불규정 </h3>

      <div className="icoScroll"></div>
      <div className="scrollWrap">
        <table className="roomT">
          <tbody>
          <tr>
            <th style={{color: '#ff5500'}}>10일전 ~</th>
            <th>9일전</th>
            <th>8일전</th>
            <th>7일전</th>
            <th>6일전</th>
            <th>5일전</th>
            <th>4일전</th>
            <th>3일전</th>
            <th>2일전</th>
            <th>1일전</th>
            <th>0일전</th>
          </tr>
          <tr>
            <td style={{color: '#ff5500'}}>90%</td>
            <td>80%</td>
            <td>70%</td>
            <td>60%</td>
            <td>50%</td>
            <td>40%</td>
            <td>30%</td>
            <td>20%</td>
            <td>10%</td>
            <td>0%</td>
            <td>0%</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
