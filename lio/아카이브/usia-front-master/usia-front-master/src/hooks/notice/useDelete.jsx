import { useDispatch, useSelector } from 'react-redux';
import { deleteNotice } from 'src/modules/notice';

const useDelete = () => {
  const { deleteN, deleteError, deleteLoading } = useSelector(({ notice, loading }) => ({
    deleteN: notice.deleteN,
    deleteError: notice.deleteError,
    deleteLoading: loading['notice/DELETE_NOTICE'],
  }));
  const dispatch = useDispatch();

  const deletedNotice = boardId => {
    dispatch(deleteNotice(boardId));
  };

  return {
    deletedNotice,
    deleteN,
    deleteError,
    deleteLoading,
  };
};

export default useDelete;
