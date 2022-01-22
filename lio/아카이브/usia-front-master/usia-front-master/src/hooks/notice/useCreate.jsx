import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotice, changeField } from 'src/modules/notice';

const useCreate = () => {
  const { title, content, thumbnail } = useSelector(({ notice }) => ({
    title: notice.title,
    content: notice.content,
    thumbnail: notice.thumbnail,
  }));
  const dispatch = useDispatch();
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onCreateSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append('thumbnail', thumbnail);
    dispatch(createNotice(fd));
  };

  return {
    onChangeField,
    onCreateSubmit,
    title,
    content,
  };
};

export default useCreate;
