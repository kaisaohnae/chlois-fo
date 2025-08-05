'use client';

import React, { useState, useEffect } from 'react';
import useAlertStore from '@/store/use-alert-store';
import QnaService from "@/service/od/qna-service";

interface Props {
  showFormPopup: boolean;
  setShowFormPopup: (value: boolean) => void;
}

export default function QnaWrite({ showFormPopup, setShowFormPopup }: Props) {
  const { showAlert, hideAlert } = useAlertStore();

  const initFormData = {
    memberName: '',
    phoneNo: '',
    email: '',
    title: '',
    content: '',
  };

  const [formData, setFormData] = useState(initFormData);

  useEffect(() => {
    if (!showFormPopup) {
      setFormData(initFormData);
    }
  }, [showFormPopup]);

  if (!showFormPopup) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await QnaService.saveQna(formData);
    showAlert({
      message: res.message,
      buttons: [
        {
          type: 'on',
          text: '확인',
          callback: () => {
            hideAlert();
            if (res.success) {
              setShowFormPopup(false);
              window.location.reload();
            }
          },
        },
      ],
    });
  };

  return (
    <div className="qna-form-popup">
      <div className="form">
        <form id="formQna" onSubmit={handleSubmit}>

          <table className="write-table">
            <tbody>
            <tr>
              <th className="required">문의자명</th>
              <td>
                <input type="text" name="memberName" value={formData.memberName} onChange={handleChange} required maxLength={15}/>
              </td>
            </tr>
            <tr>
              <th className="required">휴대폰번호</th>
              <td>
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required maxLength={13}/>
              </td>
            </tr>
            <tr>
              <th className="required">이메일</th>
              <td>
                <input type="text" name="email" value={formData.email} onChange={handleChange} required maxLength={30}/>
              </td>
            </tr>
            <tr>
              <th className="required">제목</th>
              <td>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required maxLength={50}/>
              </td>
            </tr>
            <tr>
              <th className="required">내용</th>
              <td>
                <textarea name="content" value={formData.content} onChange={handleChange} maxLength={80} required style={{height: '120px'}}></textarea>
                <br/>{formData.content.length} / 80 자
              </td>
            </tr>
            </tbody>
          </table>

          <div className="button-wrapper">
            <button type="submit">확인</button>
            <button type="button" onClick={() => setShowFormPopup(false)}>취소</button>
          </div>

        </form>
      </div>
    </div>
  );
}
