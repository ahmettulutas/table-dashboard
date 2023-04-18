import React, { FunctionComponent } from "react";
import Button from "~/components/UIComponents/Button";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { enums } from "~/lib/enums";
import { setSelectedStatusFilter } from "~/store/api/redux/common";
import { selectAllPosts } from "~/store/api/redux/posts/selectors";
import LoadingSpinner from "./LoadingSpinner";

const Categories:FunctionComponent = () => {

  const data = useAppSelector(selectAllPosts);
  const selectedFilter = useAppSelector(state => state.common.selectedFilter);
  const dispatch = useAppDispatch();
  const countedData = Object.keys(enums.postStatus).map(key => ({
    length: data?.filter(item => item.post_status === key).length,
    id: enums.postStatus[key],
    key
  }));
  const { loading } = useAppSelector(state => state.postSlice.posts);

  return (
    <div className="overflow-x-auto max-w-full mb-16 custom-scrollbar">
      {
        loading ?
          <LoadingSpinner />
          :
          <div className="flex gap-2 items-center py-4">
            <Button
              onClick={() => dispatch(setSelectedStatusFilter(undefined))}
              customStyles={`${!selectedFilter ? "btn-primary": "btn-gray"} min-w-fit text-xs`} id={"all"}><p>{`(${data?.length})`}</p></Button>
            {
              countedData.map(item => (
                <Button
                  onClick={() => dispatch(setSelectedStatusFilter(item.key))}
                  customStyles={`${item.key === selectedFilter ? "btn-primary": "btn-gray"} min-w-fit text-xs`} key={item.id} id={item.id}><span>{`(${item.length ?? ""})`}</span></Button>
              ))
            }
          </div>
      }

    </div>
  );
};

export default Categories;