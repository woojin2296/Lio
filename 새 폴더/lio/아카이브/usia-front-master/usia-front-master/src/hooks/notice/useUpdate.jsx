import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotice, changeField } from 'src/modules/notice';

const useUpdate = () => {
  const { title, content } = useSelector(({ notice }) => ({
    title: notice.title,
    content: notice.content,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onUpdateSubmit = e => {
    e.preventDefault();
    dispatch(updateNotice({ boardId: parseInt(e.target.value, 10), title, content }));
  };

  return {
    onChangeField,
    onUpdateSubmit,
    title,
    content,
  };
};

export default useUpdate;
