import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readNoticeList } from 'src/modules/notice';

const useRead = () => {
  const { create, update, notices, noticesError, noticesLoading } = useSelector(
    ({ notice, loading }) => ({
      create: notice.create,
      update: notice.update,
      notices: notice.notices,
      noticesError: notice.noticesError,
      noticesLoading: loading['notice/READ_NOTICELIST'],
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readNoticeList());
  }, [update, create]);

  return {
    notices,
    noticesError,
    noticesLoading,
  };
};

export default useRead;
