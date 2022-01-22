import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readNotice } from 'src/modules/notice';

const useViewer = boardId => {
  const { notice, noticeError, noticeLoading } = useSelector(({ notice, loading }) => ({
    notice: notice.notice,
    noticeError: notice.noticeError,
    noticeLoading: loading['notice/READ_NOTICE'],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readNotice(boardId));
  }, [boardId]);

  return {
    notice,
    noticeError,
    noticeLoading,
  };
};

export default useViewer;
