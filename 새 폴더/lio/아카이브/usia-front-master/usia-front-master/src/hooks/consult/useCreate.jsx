import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createConsult, changeField, unloadConsult } from 'src/modules/consult';
import swal from 'sweetalert';

const useCreate = history => {
  const { langId, name, email, tel, title, content, type, file } = useSelector(({ consult }) => ({
    langId: consult.langId,
    name: consult.name,
    email: consult.email,
    tel: consult.tel,
    title: consult.title,
    content: consult.content,
    type: consult.type,
    file: consult.file,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onSubmit = e => {
    const fd = new FormData();
    e.preventDefault();
    fd.append('langId', langId);
    fd.append('name', name);
    fd.append('email', email);
    fd.append('tel', tel);
    fd.append('title', title);
    fd.append('content', content);
    fd.append('type', type);
    fd.append('file', file);
    if (!langId || !name || !email || !tel || !title || !content || !type) {
      swal('빈칸을 채워주세요!', '', 'error');
      return;
    }
    dispatch(createConsult(fd));
    history.push(`/consult/success`);
  };
  const onUnload = () => dispatch(unloadConsult());

  return {
    onSubmit,
    onChangeField,
    onUnload,
    langId,
    name,
    email,
    tel,
    title,
    content,
    type,
    file,
  };
};

export default useCreate;
