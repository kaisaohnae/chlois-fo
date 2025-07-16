'use client';

import React, {useState, useEffect, useRef, ReactElement} from 'react';


export default function Page(): ReactElement {

  useEffect(() => {
  }, []);

  return (
    <div className="layerAgree" data-ng-show="layerAgree.active">
      <form id="formAgree" name="formReservation" data-ng-submit="layerAgree.submit()">
        <h2>예약전 약관동의</h2>
        <div className="scroll">
          <h3><label><input data-ng-model="layerAgree.agreeAll" data-ng-change="layerAgree.agreeChage()" type="checkbox"/> 전체동의</label></h3>
          <h3><label><input data-ng-model="layerAgree.agree1" type="checkbox"/> 이용시 유의사항에 동의</label></h3>
          <p>
            보호자 동반없는 미성년자는 예약 및 입실 불가합니다.<br/>
            예약시 신청하신 인원이외에 추가인원은 입실이 거부될 수 있습니다.<br/>
            예약인원 초과로 인한 입실 거부시 환불도 되지 않으니 유의하시기 바랍니다.<br/>
            예약후 펜션이나 객실 변경은 해당예약 취소후 다시 예약하셔야 합니다.<br/>
            예약변경을 위한 취소시에도 취소수수료가 부과되오니 신중하게 예약하시기 바랍니다.<br/>
            <span className="font1">애완견 동반시 입실이 불가능 합니다.</span><br/>
            냄새가 심한 요리는 다음손님을 위해 삼가해주시기 바랍니다.<br/>
            퇴실 시에는 내집같이 정돈을 부탁 드립니다.<br/>
          </p>
          <h3><label><input data-ng-model="layerAgree.agree2" type="checkbox"/> 취소수수료(예약시점과 무관한 이용일 기준)에 동의</label></h3>
          <p>
            예약취소는 전화 통화로만 가능합니다.<br/>
            취소수수료는 예약시점과는 무관한 이용시작일 기준입니다.<br/>
            환불시 결제하신 금액에서 취소수수료를 제외한 금액을 환불해 드립니다.<br/>
            취소수수료는 결제금액이 아닌 예약금(객실요금+기타옵션요금) 기준으로 책정됩니다.<br/>
            취소수수료가 100% 인 경우 전액 환불되지 않습니다.<br/>
            수수료 내역은 아래와 같습니다.<br/><br/>
          </p>
          <table>
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
              <td>이용일 1 일전 취소시</td>
              <td>90%</td>
              <td>10% 환불</td>
            </tr>
            <tr>
              <td>이용일 2 일전 취소시</td>
              <td>90%</td>
              <td>20% 환불</td>
            </tr>
            <tr>
              <td>이용일 3 일전 취소시</td>
              <td>90%</td>
              <td>30% 환불</td>
            </tr>
            <tr>
              <td>이용일 4 일전 취소시</td>
              <td>90%</td>
              <td>40% 환불</td>
            </tr>
            <tr>
              <td>이용일 5 일전 취소시</td>
              <td>90%</td>
              <td>50% 환불</td>
            </tr>
            <tr>
              <td>이용일 6 일전 취소시</td>
              <td>90%</td>
              <td>60% 환불</td>
            </tr>
            <tr>
              <td>이용일 7 일전 취소시</td>
              <td>90%</td>
              <td>70% 환불</td>
            </tr>
            <tr>
              <td>이용일 8 일전 취소시</td>
              <td>90%</td>
              <td>80% 환불</td>
            </tr>
            <tr>
              <td>이용일 9 일전 취소시</td>
              <td>90%</td>
              <td>90% 환불</td>
            </tr>
            <tr>
              <td>이용일 10 일전 취소시</td>
              <td>90%</td>
              <td>0% 환불</td>
            </tr>
            <tr>
              <td>기본 취소 수수료</td>
              <td>0%</td>
              <td>100% 환불</td>
            </tr>
          </table>

          <h3><label><input data-ng-model="layerAgree.agree3" type="checkbox"/> 개인정보 수집 및 이용에 동의</label></h3>
          <p>
            '클로이스'는(은) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.<br/>
            <br/>
            개인정보의 수집항목 및 이용목적<br/>
            서비스 이용 과정에서 수집 및 이용되는 개인정보는 아래와 같습니다.<br/>
            <br/>
            <h4>수집∙이용목적</h4>
            <p>서비스 이용 및 계약의 이행, 본인 확인, 부정 이용 방지와 불만처리 등 민원처리</p>
            <h4>수집∙이용항목</h4>
            <p>예약자(구매자) 이름, 휴대전화번호, 이메일</p>
            <h4>보유 및 이용기간</h4>
            <p>이용목적 달성 후, 지체 없이 파기</p>
            <br/>
            서비스 이용 및 계약의 이행, 부정 이용∙거래 방지 방문일시, 서비스 이용 기록, IP, 접속기록, 쿠키, 기기 정보<br/>
            주문 및 예약 상품 대금 결제, 현금영수증정보 결제정보(계좌, 신용카드, 휴대폰정보),<br/>
            결제 취소 금액 환불 은행명, 계좌번호, 예금주명<br/><br/>
          </p>
          <h3><label><input data-ng-model="layerAgree.agree4" type="checkbox"/> 이용자가 미성년자가 아니며 성인임에 동의</label></h3>
          <h3><label><input data-ng-model="layerAgree.agreeAll" data-ng-change="layerAgree.agreeChage()" type="checkbox"/> 전체동의</label></h3>

        </div>
        <div className="btnWrap">
          <button type="submit">동의</button>
          <button type="button" data-ng-click="layerAgree.close()">동의안함</button>
        </div>
      </form>
    </div>
  );
}
