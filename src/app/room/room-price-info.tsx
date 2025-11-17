import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';

export default function RoomPriceInfo(): ReactElement {

  return (
    <div className="info-wrapper">
      <h3>객실 가격 정보 <span>(가격 조정이 있을 수 있습니다.)</span></h3>
      <div className="icoScroll"></div>
      <div className="scrollWrap">
        <table className="roomT">
          <tbody>
          <tr>
            <th rowSpan={2}>객실명</th>
            <th rowSpan={2}>기준인원</th>
            <th rowSpan={2}>최대인원</th>
            <th colSpan={3}>비수기</th>
            <th colSpan={3}>준성수기</th>
            <th colSpan={3}>성수기</th>
            <th colSpan={3}>극성수기</th>
          </tr>
          <tr>
            <th>주중</th>
            <th>금요일</th>
            <th>주말</th>
            <th>주중</th>
            <th>금요일</th>
            <th>주말</th>
            <th>주중</th>
            <th>금요일</th>
            <th>주말</th>
            <th>주중</th>
            <th>금요일</th>
            <th>주말</th>
          </tr>
          <tr>
            <td>풀빌라A동</td>
            <td>4명</td>
            <td>8명</td>
            <td>24만원</td>
            <td>29만원</td>
            <td>48만원</td>
            <td>34만원</td>
            <td>40만원</td>
            <td>52만원</td>
            <td>52만원</td>
            <td>56만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
          </tr>
          <tr>
            <td>풀빌라B동</td>
            <td>4명</td>
            <td>8명</td>
            <td>24만원</td>
            <td>29만원</td>
            <td>48만원</td>
            <td>34만원</td>
            <td>40만원</td>
            <td>52만원</td>
            <td>52만원</td>
            <td>56만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
          </tr>
          <tr>
            <td>풀빌라C동</td>
            <td>4명</td>
            <td>8명</td>
            <td>24만원</td>
            <td>29만원</td>
            <td>48만원</td>
            <td>34만원</td>
            <td>40만원</td>
            <td>52만원</td>
            <td>52만원</td>
            <td>56만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
            <td>65만원</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
